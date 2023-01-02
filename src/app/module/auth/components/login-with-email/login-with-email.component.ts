import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss']
})
export class LoginWithEmailComponent implements OnInit {

  @Input() loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

}
