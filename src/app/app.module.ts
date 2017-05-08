import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { DayService } from './services/day.service';

import { AppComponent }  from './app.component';
import { TopNavBarComponent } from './components/nav-bar/top-nav-bar.component';
import { RightNavBarComponent } from './components/nav-bar/right-nav-bar.component';
import { MonthCalendarComponent }  from './components/calendar/month/month-calendar.component';
import { YearCalendarComponent }  from './components/calendar/year/year-calendar.component';
import { DayDetailsComponent } from './components/forms/day-details/day-details.component';

import { EventsManager } from './managers/events.manager';
import { NavigateManager } from './managers/navigate.manager';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RightNavBarComponent,
    TopNavBarComponent,
    MonthCalendarComponent,
    YearCalendarComponent,
    DayDetailsComponent
  ],
  providers: [
    DayService,
    NavigateManager,
    EventsManager
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
