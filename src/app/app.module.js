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
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var login_module_1 = require("./modules/login/login.module");
var app_routing_module_1 = require("./app-routing.module");
var day_service_1 = require("./services/day.service");
var auth_service_1 = require("./services/auth.service");
var app_component_1 = require("./app.component");
var top_nav_bar_component_1 = require("./components/nav-bar/top-nav-bar.component");
var right_nav_bar_component_1 = require("./components/nav-bar/right-nav-bar.component");
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
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            login_module_1.LoginModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            right_nav_bar_component_1.RightNavBarComponent,
            top_nav_bar_component_1.TopNavBarComponent,
            app_routing_module_1.AppComponents
        ],
        providers: [
            app_routing_module_1.AppGuards,
            auth_service_1.AuthService,
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