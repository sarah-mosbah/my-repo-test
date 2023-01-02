import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPage } from 'projects/check-me-web/src/app/main.page';
import { takeUntil } from 'rxjs';
import { AuthProvider } from '../../state/providers/auth.provider';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPage extends MainPage implements OnInit {

  constructor(private authProvider: AuthProvider, private router: Router) { 
    super();
    this.authProvider.selectUserProfile$().pipe(takeUntil(this.destroyed$)).subscribe((userAuth) => {
      if(userAuth) {
        localStorage.setItem('x-access-token', userAuth.token);
        localStorage.setItem('userData', JSON.stringify(userAuth.userProfile));
        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnInit(): void {
  }

}
