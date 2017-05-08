"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var day_service_1 = require("../../services/day.service");
var events_manager_1 = require("../../managers/events.manager");
var RightNavBarComponent = (function () {
    function RightNavBarComponent(dayService, eventsManager) {
        this.dayService = dayService;
        this.eventsManager = eventsManager;
    }
    RightNavBarComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        var date = this.today.getDate();
        var dateDesc = date.toString();
        if (dateDesc.length == 1)
            dateDesc = '0' + dateDesc;
        this.year = this.today.getFullYear();
        var month = this.today.getMonth();
        this.monthDesc = this.dayService.getMonthName(month);
        this.todayDesc = this.dayService.getDayName(this.today) + ' ' + dateDesc;
    };
    RightNavBarComponent.prototype.goToToday = function () {
        this.eventsManager.goToDate(this.today);
    };
    RightNavBarComponent.prototype.goToMonth = function () {
        this.eventsManager.goToMonth(this.today);
    };
    RightNavBarComponent.prototype.goToYear = function () {
        this.eventsManager.goToYear(this.year);
    };
    return RightNavBarComponent;
}());
RightNavBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'right-nav-bar',
        templateUrl: 'right-nav-bar.component.html',
        styleUrls: ['right-nav-bar.component.css']
    }),
    __metadata("design:paramtypes", [day_service_1.DayService, events_manager_1.EventsManager])
], RightNavBarComponent);
exports.RightNavBarComponent = RightNavBarComponent;
//# sourceMappingURL=right-nav-bar.component.js.map