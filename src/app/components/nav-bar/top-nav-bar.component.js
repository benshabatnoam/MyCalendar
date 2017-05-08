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
var TopNavBarComponent = (function () {
    function TopNavBarComponent(dayService, eventsManager) {
        this.dayService = dayService;
        this.eventsManager = eventsManager;
    }
    TopNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsManager.goToDateEmitter.subscribe(function (date) {
            _this.init(date);
        });
        this.eventsManager.goToMonthEmitter.subscribe(function (date) {
            _this.init(date);
        });
        this.eventsManager.goToYearEmitter.subscribe(function (year) {
            _this.initYear(year);
        });
    };
    TopNavBarComponent.prototype.init = function (date) {
        if (date) {
            this.year = date.getFullYear();
            this.month = date.getMonth();
            this.description = this.dayService.getMonthName(this.month) + ' ' + this.year;
        }
    };
    TopNavBarComponent.prototype.initYear = function (year) {
        if (year) {
            this.year = year;
            this.month = null;
            this.description = year.toString();
        }
    };
    TopNavBarComponent.prototype.prev = function () {
        if (this.month || this.month == 0)
            this.prevMonth();
        else
            this.prevYear();
    };
    TopNavBarComponent.prototype.prevMonth = function () {
        var year = this.year;
        var month = this.month;
        month--;
        if (month == -1) {
            year--;
            month = 11;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    };
    TopNavBarComponent.prototype.prevYear = function () {
        this.eventsManager.goToYear(this.year - 1);
    };
    TopNavBarComponent.prototype.next = function () {
        if (this.month || this.month == 0)
            this.nextMonth();
        else
            this.nextYear();
    };
    TopNavBarComponent.prototype.nextMonth = function () {
        var year = this.year;
        var month = this.month;
        month++;
        if (month == 12) {
            year++;
            month = 0;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    };
    TopNavBarComponent.prototype.nextYear = function () {
        this.eventsManager.goToYear(this.year + 1);
    };
    TopNavBarComponent.prototype.goToYear = function () {
        this.eventsManager.goToYear(this.year);
    };
    return TopNavBarComponent;
}());
TopNavBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'top-nav-bar',
        templateUrl: 'top-nav-bar.component.html'
    }),
    __metadata("design:paramtypes", [day_service_1.DayService,
        events_manager_1.EventsManager])
], TopNavBarComponent);
exports.TopNavBarComponent = TopNavBarComponent;
//# sourceMappingURL=top-nav-bar.component.js.map