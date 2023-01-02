import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BidiModule } from '@angular/cdk/bidi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './module/shared/shared.module';
import { HomeModule } from './module/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutModule } from './module/checkout/checkout.module';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Configuration } from './module/shared/models/configuration.interface';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MainPage } from './main.page';
import { AuthModule } from './module/auth/auth.module';

const configuration: Configuration = {
  apigatewayUrl: environment.apiGatewayV1,
  apigatewayUrlVersion2: environment.apiGatewayV2,
} 
@NgModule({
  declarations: [
    AppComponent,
    MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AuthModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    BidiModule,
    CheckoutModule,
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    EffectsModule.forRoot(),
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
