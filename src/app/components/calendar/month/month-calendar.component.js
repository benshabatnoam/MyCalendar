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
var router_1 = require("@angular/router");
var animations_1 = require("@angular/animations");
var day_service_1 = require("../../../services/day.service");
var events_manager_1 = require("../../../managers/events.manager");
var day_1 = require("../../../models/day");
var MonthCalendarComponent = (function () {
    function MonthCalendarComponent(aRoute, dayService, eventsManager) {
        this.aRoute = aRoute;
        this.dayService = dayService;
        this.eventsManager = eventsManager;
    }
    MonthCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            _this.initMonth(params['year'], params['month']);
        });
    };
    MonthCalendarComponent.prototype.initMonth = function (year, month) {
        this.year = year;
        this.month = month;
        this.monthName = this.dayService.getMonthName(this.month);
        this.initWeeks();
    };
    MonthCalendarComponent.prototype.initWeeks = function () {
        this.weeks = [];
        var week = [];
        var firstMonthDate = new Date(this.year, this.month, 1);
        if (!this.isSunday(firstMonthDate)) {
            var preSunday = this.getPrevSunday();
            week = this.getWeekDates(preSunday);
            this.weeks.push(week);
        }
        var date = firstMonthDate;
        while (this.weeks.length < 6) {
            if (this.isSunday(date)) {
                week = this.getWeekDates(date);
                this.weeks.push(week);
            }
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
    };
    MonthCalendarComponent.prototype.getPrevSunday = function () {
        var date = new Date(this.year, this.month, 0);
        while (!this.isSunday(date)) {
            date = new Date(this.year, date.getMonth(), date.getDate() - 1);
        }
        return date;
    };
    MonthCalendarComponent.prototype.isSunday = function (date) {
        return date.getDay() == 0;
    };
    MonthCalendarComponent.prototype.getWeekDates = function (sunday) {
        var days = [];
        days.push(new day_1.Day(sunday, this.month));
        var date = sunday;
        while (!this.isSaturday(date)) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            days.push(new day_1.Day(date, this.month));
        }
        return days;
    };
    MonthCalendarComponent.prototype.isSaturday = function (date) {
        return date.getDay() == 6;
    };
    MonthCalendarComponent.prototype.goToDate = function (day) {
        this.eventsManager.goToDate(new Date(day.year, day.month, day.date));
    };
    return MonthCalendarComponent;
}());
MonthCalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'month-calendar.component.html',
        styleUrls: ['../calendar.css'],
        animations: [
            animations_1.trigger('fadeIn', [
                animations_1.transition(':enter', [
                    animations_1.animate('0.4s ease-in', animations_1.keyframes([
                        animations_1.style({ opacity: 0, transform: 'scale(0.7)', offset: 0 }),
                        animations_1.style({ opacity: 1, transform: 'scale(1)', offset: 1 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, day_service_1.DayService, events_manager_1.EventsManager])
], MonthCalendarComponent);
exports.MonthCalendarComponent = MonthCalendarComponent;
//# sourceMappingURL=month-calendar.component.js.map