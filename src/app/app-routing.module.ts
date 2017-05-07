import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { YearCalendarComponent } from './components/calendar/year/year-calendar.component';
import { MonthComponent } from './components/month/month.component';
import { DayDetailsComponent } from './components/day/day-details.component';

const routs: Routes = [
    { path: ':year', component: YearCalendarComponent },
    { path: ':year/:month', component: MonthComponent },
    { path: ':year/:month/:day', component: DayDetailsComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routs) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}