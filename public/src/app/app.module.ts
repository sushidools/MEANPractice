import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EqualValidator } from './directives/validate-equal.directive';

import { CookieModule } from 'ngx-cookie';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

import { AuthService } from './services/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotfoundComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
