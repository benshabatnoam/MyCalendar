"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var year_calendar_component_1 = require("./components/calendar/year/year-calendar.component");
var month_calendar_component_1 = require("./components/calendar/month/month-calendar.component");
var day_details_component_1 = require("./components/forms/day-details/day-details.component");
var edit_day_details_component_1 = require("./components/forms/edit-day-details/edit-day-details.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
var routs = [
    { path: 'edit', component: edit_day_details_component_1.EditDayDetailsComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: ':year', component: year_calendar_component_1.YearCalendarComponent },
    { path: ':year/:month', component: month_calendar_component_1.MonthCalendarComponent },
    { path: ':year/:month/:day', component: day_details_component_1.DayDetailsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routs)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.AppComponents = [
    year_calendar_component_1.YearCalendarComponent,
    month_calendar_component_1.MonthCalendarComponent,
    day_details_component_1.DayDetailsComponent,
    edit_day_details_component_1.EditDayDetailsComponent
];
exports.AppGuards = [
    auth_guard_service_1.AuthGuard
];
//# sourceMappingURL=app-routing.module.js.map