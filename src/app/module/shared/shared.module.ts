import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/skeleton/footer/footer.component';
import { HeaderComponent } from './components/skeleton/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserInfoCardComponent } from './components/user-info-card/user-info-card.component';
import { MatCardModule } from '@angular/material/card';
import { PaginatorArrowComponent } from './components/paginator-arrow/paginator-arrow.component';
import { ChipComponent } from './components/chip/chip.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckMeButtonComponent } from './components/check-me-button/check-me-button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckMeWhiteButtonComponent } from './components/check-me-white-button/check-me-white-button.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckMeCheckboxComponent } from './components/check-me-checkbox/check-me-checkbox.component';
import { KeysPipe } from './pipes/key.pipe';
import { LightCheckMeButtonComponent } from './components/light-check-me-button/light-check-me-button.component';
import { NumbersOnlyDirective } from './directives/numbersOnly';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    StarRatingComponent,
    UserInfoCardComponent,
    PaginatorArrowComponent,
    ChipComponent,
    PaginatorComponent,
    CheckMeButtonComponent,
    CalendarComponent,
    CheckMeWhiteButtonComponent,
    CheckMeCheckboxComponent,
    KeysPipe,
    LightCheckMeButtonComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    StarRatingComponent,
    UserInfoCardComponent,
    PaginatorArrowComponent,
    ChipComponent, 
    PaginatorComponent,
    CheckMeButtonComponent,
    CalendarComponent,
    CheckMeWhiteButtonComponent,
    CheckMeCheckboxComponent,
    KeysPipe,
    LightCheckMeButtonComponent,
    NumbersOnlyDirective
  ],
  
})
export class SharedModule { }
