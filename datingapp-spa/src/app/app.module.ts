import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {map} from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import { LoginauthService } from './_services/loginauth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyServiceService } from './_services/alertifyService.service';
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BsDropdownModule.forRoot(),
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      LoginauthService
      , ErrorInterceptorProvider,
      AlertifyServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
