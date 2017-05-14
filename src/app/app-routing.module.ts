import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { YearCalendarComponent } from './components/calendar/year/year-calendar.component';
import { MonthCalendarComponent } from './components/calendar/month/month-calendar.component';
import { DayDetailsComponent } from './components/forms/day-details/day-details.component';
import { EditDayDetailsComponent } from './components/forms/edit-day-details/edit-day-details.component';

const routs: Routes = [
    { path: 'edit', component: EditDayDetailsComponent },
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

export const AppComponents = [
    YearCalendarComponent,
    MonthCalendarComponent,
    DayDetailsComponent,
    EditDayDetailsComponent
]