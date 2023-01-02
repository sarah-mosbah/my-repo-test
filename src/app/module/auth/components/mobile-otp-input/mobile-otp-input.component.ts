import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainPage } from 'projects/check-me-web/src/app/main.page';
import { takeUntil } from 'rxjs';
import { AuthProvider } from '../../state/providers/auth.provider';
@Component({
  selector: 'mobile-otp-input',
  templateUrl: './mobile-otp-input.component.html',
  styleUrls: ['./mobile-otp-input.component.scss']
})
export class MobileOtpInputComponent extends MainPage implements OnInit {
  @Output() onInputIsValid = new EventEmitter<{value: string, valid: boolean}>();
  otpForm!: FormGroup;
  inputControls: FormControl[] = new Array<FormControl>(6);
  inputType!: string;
  errorMessage: any;
  invalid!: boolean;
  constructor(private authProvider: AuthProvider) {
    super();
    this.authProvider.selectLoginError$().pipe(takeUntil(this.destroyed$)).subscribe((httpError) => {
      if(!httpError) {
        this.errorMessage = '';
        this.invalid = false;
        return;
      };
      const {error} = httpError;
      if(error.message.includes('Invalid verification code.')) {
        this.errorMessage = error.message;
        this.invalid = true;
      } 
    });
  }

  ngOnInit() {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < 6; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl('', Validators.required));
    }
    this.inputType = 'tel';
    
  }
  ngAfterViewInit(): void {
  }
  private getControlName(idx: number) {
    return `ctrl_${idx}`;
  }

  ifLeftArrow(event: any) {
    return this.ifKeyCode(event, 37);
  }


  ifRightArrow(event: any) {
    return this.ifKeyCode(event, 39);
  }

  ifBackspaceOrDelete(event: any) {
    return (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      this.ifKeyCode(event, 8) ||
      this.ifKeyCode(event, 46)
    );
  }

  ifKeyCode(event: any, targetCode: number) {
    const key = event.keyCode || event.charCode;
    // tslint:disable-next-line: triple-equals
    return key == targetCode ? true : false;
  }
  onKeyDown($event: any) {
    var isSpace=this.ifKeyCode($event,32)
    if (isSpace) {// prevent space
      return false;
    }
    return true;
  }

  onKeyUp($event: any, inputIdx: number) {
    const nextInputId =`otp_${inputIdx + 1}`;
    const prevInputId =`otp_${inputIdx - 1}`;
  
    if (this.ifRightArrow($event)) {
      this.setSelected(nextInputId);
      return;
    }
    if (this.ifLeftArrow($event)) {
      this.setSelected(prevInputId);
      return;
    }
    const isBackspace = this.ifBackspaceOrDelete($event);
    if (isBackspace && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidEntry($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }
  setSelected(eleId:string) {
    this.focusTo(eleId);
    const ele: any = document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }

  ifValidEntry(event: any) {
    const inp = String.fromCharCode(event.keyCode);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
      isMobile ||
      /[a-zA-Z0-9-_]/.test(inp) 
    );
  }

  focusTo(eleId: string) {
    const ele: any = document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  setValue(value: any) {
    this.otpForm.reset();
     if (!value) {
       this.rebuildValue();
       return;
     }
     value = value.toString().replace(/\s/g, ''); // remove whitespace
     Array.from(value).forEach((c, idx) => {
          if (this.otpForm.get(this.getControlName(idx))) {
            this.otpForm.get(this.getControlName(idx))?.setValue(c);
          }
     });
     this.rebuildValue();
  }


  rebuildValue() {
    let val = '';
    Object.keys(this.otpForm.controls).forEach((k: string) => {
      if (this.otpForm.controls[k].value) {
        val += this.otpForm.controls[k].value;
      }
    });
    if(val.length === 6) 
      this.onInputIsValid.emit({valid: true, value: val});
    else 
      this.onInputIsValid.emit({valid: false, value: val});
  }
}
