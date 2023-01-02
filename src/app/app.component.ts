import { Direction } from '@angular/cdk/bidi';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { MainPage } from './main.page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MainPage {
  title = 'CheckMeHealthWebApp';
  direction: Direction;
  userLanguage: string;
  isLogin!: boolean;
  constructor(private router: Router) {
    super();
    this.userLanguage = navigator.language;
    this.direction = this.userLanguage === "ar" ? 'rtl' : 'ltr';

    router.events.pipe(takeUntil(this.destroyed$)).subscribe(event => {
      if(event instanceof NavigationEnd){
        this.isLogin = event.url.includes('/login');
      }
    });

  }
}
