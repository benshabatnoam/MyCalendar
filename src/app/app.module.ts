import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginModule } from './modules/login/login.module';

import { AppRoutingModule, AppComponents, AppGuards } from './app-routing.module';

import { DayService } from './services/day.service';
import { AuthService } from './services/auth.service';

import { AppComponent }  from './app.component';
import { TopNavBarComponent } from './components/nav-bar/top-nav-bar.component';
import { RightNavBarComponent } from './components/nav-bar/right-nav-bar.component';

import { EventsManager } from './managers/events.manager';
import { NavigateManager } from './managers/navigate.manager';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RightNavBarComponent,
    TopNavBarComponent,
    AppComponents
  ],
  providers: [
    AppGuards,
    AuthService,
    DayService,
    NavigateManager,
    EventsManager
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
