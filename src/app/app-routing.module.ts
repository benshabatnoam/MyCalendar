import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { YearCalendarComponent } from './components/calendar/year/year-calendar.component';
import { MonthCalendarComponent } from './components/calendar/month/month-calendar.component';
import { DayDetailsComponent } from './components/day/day-details.component';

const routs: Routes = [
    { path: ':year', component: YearCalendarComponent },
    { path: ':year/:month', component: MonthCalendarComponent },
    { path: ':year/:month/:day', component: DayDetailsComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routs) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}