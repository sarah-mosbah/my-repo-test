import { Component, OnInit } from '@angular/core';
import { MainPage } from 'projects/check-me-web/src/app/main.page';
import { takeUntil } from 'rxjs';
import { UserAuth } from '../../../../auth/models/userProfile';
import { AuthProvider } from '../../../../auth/state/providers/auth.provider';
import { UserProfile } from '../../../../models/login.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends MainPage implements OnInit {

  userProfile!: UserProfile;
  constructor(private authProvider: AuthProvider) {
    super();
    this.authProvider.selectUserProfile$().pipe(takeUntil(this.destroyed$)).subscribe((userAuth) => {
      if(!userAuth) {
        this.userProfile =JSON.parse(localStorage.getItem('userData')!);
      } else {
        this.userProfile = userAuth.userProfile as UserProfile;
      }

    });
  }

  ngOnInit(): void {
      
  }

}
