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
var core_1 = require('@angular/core');
var day_service_1 = require('../../services/day.service');
var events_manager_1 = require('../../managers/events.manager');
var TopNavBarComponent = (function () {
    function TopNavBarComponent(dayService, eventsManager) {
        this.dayService = dayService;
        this.eventsManager = eventsManager;
    }
    TopNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsManager.goToDateEmitter.subscribe(function (date) {
            if (date) {
                _this.year = date.getFullYear();
                _this.month = date.getMonth();
                _this.monthName = _this.dayService.getMonthName(_this.month);
            }
        });
        this.eventsManager.goToMonthEmitter.subscribe(function (date) {
            if (date) {
                _this.year = date.getFullYear();
                _this.month = date.getMonth();
                _this.monthName = _this.dayService.getMonthName(_this.month);
            }
        });
    };
    TopNavBarComponent.prototype.goToPrevMonth = function () {
        var year = this.year;
        var month = this.month;
        month--;
        if (month == -1) {
            year--;
            month = 11;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    };
    TopNavBarComponent.prototype.goToNextMonth = function () {
        var year = this.year;
        var month = this.month;
        month++;
        if (month == 12) {
            year++;
            month = 0;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    };
    TopNavBarComponent.prototype.goToYear = function () {
        this.eventsManager.goToYear(this.year);
    };
    TopNavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top-nav-bar',
            templateUrl: 'top-nav-bar.component.html'
        }), 
        __metadata('design:paramtypes', [day_service_1.DayService, events_manager_1.EventsManager])
    ], TopNavBarComponent);
    return TopNavBarComponent;
}());
exports.TopNavBarComponent = TopNavBarComponent;
//# sourceMappingURL=top-nav-bar.component.js.map