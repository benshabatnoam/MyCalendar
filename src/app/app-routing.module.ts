import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { TestPageComponent } from './components/test-page.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { YearCalendarComponent } from './components/calendar/year/year-calendar.component';
import { MonthCalendarComponent } from './components/calendar/month/month-calendar.component';
import { DayDetailsComponent } from './components/forms/day-details/day-details.component';
import { EditDayDetailsComponent } from './components/forms/edit-day-details/edit-day-details.component';

import { AuthGuard } from './services/auth-guard.service';
import { TaldorPermissionsGuard } from './modules/taldor/taldor-permissions-guard.service';

const routs: Routes = [
    {
        path: 'test',
        component: TestPageComponent
    },
    {
        path: 'edit',
        component: EditDayDetailsComponent,
        canActivate: [ AuthGuard, TaldorPermissionsGuard ]
    },
    {
        path: 'year/:year',
        component: YearCalendarComponent,
        canActivate: [ TaldorPermissionsGuard ]
    },
    {
        path: 'month/:year/:month',
        component: MonthCalendarComponent,
        canActivate: [ TaldorPermissionsGuard ]
    },
    {
        path: 'day/:year/:month/:day',
        component: DayDetailsComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routs) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{

}

export const AppComponents = [
    TestPageComponent,
    PageNotFoundComponent,
    YearCalendarComponent,
    MonthCalendarComponent,
    DayDetailsComponent,
    EditDayDetailsComponent
]

export const AppGuards = [
    AuthGuard
]