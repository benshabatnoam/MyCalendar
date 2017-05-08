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
var router_1 = require('@angular/router');
var month_1 = require('../../../models/month');
var day_service_1 = require('../../../services/day.service');
var events_manager_1 = require('../../../managers/events.manager');
var YearCalendarComponent = (function () {
    function YearCalendarComponent(aRoute, eventManger, dayService) {
        this.aRoute = aRoute;
        this.eventManger = eventManger;
        this.dayService = dayService;
    }
    YearCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            _this.year = +params['year'];
        });
        this.initQuarters();
    };
    YearCalendarComponent.prototype.initQuarters = function () {
        this.quarters = [];
        var months = this.dayService.months;
        for (var quarterIndex = 0; quarterIndex <= 3; quarterIndex++) {
            var quarter = [];
            for (var monthIndexInQuarter = 0; monthIndexInQuarter <= 2; monthIndexInQuarter++) {
                var monthIndex = monthIndexInQuarter + (quarterIndex * 3);
                quarter.push(new month_1.Month(months[monthIndex], monthIndex));
            }
            this.quarters.push(quarter);
        }
    };
    YearCalendarComponent.prototype.goToMonth = function (month) {
        this.eventManger.goToMonth(new Date(this.year, month, 1));
    };
    YearCalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'year-calendar.component.html',
            styleUrls: ['../calendar.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, events_manager_1.EventsManager, day_service_1.DayService])
    ], YearCalendarComponent);
    return YearCalendarComponent;
}());
exports.YearCalendarComponent = YearCalendarComponent;
//# sourceMappingURL=year-calendar.component.js.map