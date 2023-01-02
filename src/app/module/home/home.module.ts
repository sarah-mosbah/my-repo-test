import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home-page/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MobileAppAdComponent } from './components/mobile-app-ad/mobile-app-ad.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CheckMeServicesComponent } from './components/check-me-services/check-me-services.component';
import { CheckMeBundleItemComponent } from './components/check-me-bundle-item/check-me-bundle-item.component';
import { CheckMeSliderComponent } from './components/check-me-slider/check-me-slider.component';
import { CheckMeCategoryItemComponent } from './components/check-me-category-item/check-me-category-item.component';
import { LaboratoriesComponent } from './components/laboratories/laboratories.component';
import { FeedBackCardComponent } from './components/feed-back-card/feed-back-card.component';
import { AutoSliderComponent } from './components/auto-slider/auto-slider.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { DoctorFilterationPage } from './pages/doctor-filteration/doctor-filteration.page';
import { SharedModule } from '../shared/shared.module';
import { DoctorInformationCardComponent } from './components/doctor-information-card/doctor-information-card.component';
import { TimePickerNavigatorComponent } from './components/time-picker-navigator/time-picker-navigator.component';
import { TimePickerComponent } from './components/time-picker-navigator/time-picker/time-picker.component';
import { FilterAndSearchPage } from './pages/filter-and-search/filter-and-search.page';
import { DoctorDetailsPage } from './pages/doctor-details/doctor-details.page';
import { EffectsModule } from '@ngrx/effects';
import { DoctorsEffects } from './state/effects/doctors.effects';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from '../home/state/reducers/home.reducer';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterComponent } from './components/filter/filter.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SliderComponent } from './components/slider/slider.component';
@NgModule({
  declarations: [
    HomePage,
    SearchComponent,
    SubscriptionFormComponent,
    MobileAppAdComponent,
    CheckMeServicesComponent,
    CheckMeBundleItemComponent,
    CheckMeSliderComponent,
    CheckMeCategoryItemComponent,
    LaboratoriesComponent,
    FeedBackCardComponent,
    AutoSliderComponent,
    BlogComponent,
    DoctorFilterationPage,
    DoctorInformationCardComponent,
    TimePickerNavigatorComponent,
    TimePickerComponent,
    FilterAndSearchPage,
    DoctorDetailsPage,
    FilterComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    SharedModule,
    StoreModule.forFeature(fromFeature.homeFeatureKey, fromFeature.reducer),
    EffectsModule.forFeature([DoctorsEffects]),
    NgxPaginationModule,
    NgxSliderModule
  ]
})
export class HomeModule { }
