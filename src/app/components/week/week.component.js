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
var day_1 = require('../../models/day');
var WeekComponent = (function () {
    function WeekComponent() {
        this.days = [];
    }
    WeekComponent.prototype.ngOnInit = function () {
        if (this.days.length > 0)
            return;
        this.fillDates();
    };
    WeekComponent.prototype.isSaturday = function (date) {
        return date.getDay() == 6;
    };
    WeekComponent.prototype.fillDates = function () {
        this.days.push(new day_1.Day(this.sunday, this.month));
        var date = this.sunday;
        while (!this.isSaturday(date)) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            this.days.push(new day_1.Day(date, this.month));
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], WeekComponent.prototype, "sunday", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WeekComponent.prototype, "month", void 0);
    WeekComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'week',
            templateUrl: 'week.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WeekComponent);
    return WeekComponent;
}());
exports.WeekComponent = WeekComponent;
//# sourceMappingURL=week.component.js.map