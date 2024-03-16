import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListDashboardComponent } from './pages/dashboard/list-dashboard/list-dashboard.component';
import { UserListDashboardComponent } from './pages/dashboard/list-dashboard/user-list-dashboard/user-list-dashboard.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ListDashboardComponent,
    UserListDashboardComponent,
    SpinnerComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
