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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var DayService = (function () {
    function DayService(http) {
        this.http = http;
        this.months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
        this.days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
        this.serverURL = 'http://localhost/MyCalendarServer/';
        this.getDayDetailsURL = this.serverURL + 'DayDetails/GetDayDetails';
        this.saveDayDetailsURL = this.serverURL + 'DayDetails/SaveDayDetails';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    DayService.prototype.getDayName = function (date) {
        return this.days[date.getDay()];
    };
    DayService.prototype.getMonthName = function (month) {
        return this.months[month];
    };
    DayService.prototype.getDayDetails = function (date, month, year) {
        return this.http.post(this.getDayDetailsURL, { date: date, month: month, year: year }, this.options)
            .toPromise();
    };
    DayService.prototype.saveDayDetails = function (dayDetails) {
        var json = JSON.stringify(dayDetails);
        return this.http.post(this.saveDayDetailsURL, { dayDetails: json }, this.options)
            .toPromise();
    };
    DayService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DayService);
    return DayService;
}());
exports.DayService = DayService;
//# sourceMappingURL=day.service.js.map