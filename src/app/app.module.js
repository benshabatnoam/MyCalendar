"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var day_service_1 = require("./services/day.service");
var app_component_1 = require("./app.component");
var top_nav_bar_component_1 = require("./components/nav-bar/top-nav-bar.component");
var right_nav_bar_component_1 = require("./components/nav-bar/right-nav-bar.component");
var month_calendar_component_1 = require("./components/calendar/month/month-calendar.component");
var year_calendar_component_1 = require("./components/calendar/year/year-calendar.component");
var day_details_component_1 = require("./components/forms/day-details/day-details.component");
var events_manager_1 = require("./managers/events.manager");
var navigate_manager_1 = require("./managers/navigate.manager");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            right_nav_bar_component_1.RightNavBarComponent,
            top_nav_bar_component_1.TopNavBarComponent,
            month_calendar_component_1.MonthCalendarComponent,
            year_calendar_component_1.YearCalendarComponent,
            day_details_component_1.DayDetailsComponent
        ],
        providers: [
            day_service_1.DayService,
            navigate_manager_1.NavigateManager,
            events_manager_1.EventsManager
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map