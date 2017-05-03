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
var day_service_1 = require('../../services/day.service');
var events_manager_1 = require('../../managers/events.manager');
var day_details_1 = require('../../models/day-details');
var DayDetailsComponent = (function () {
    function DayDetailsComponent(aRoute, eventsManager, dayService) {
        this.aRoute = aRoute;
        this.eventsManager = eventsManager;
        this.dayService = dayService;
        this.arvitChanged = new core_1.EventEmitter();
        this.arvit = false;
    }
    DayDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRoute.params.subscribe(function (params) {
            _this.day = params['day'];
            _this.month = params['month'];
            _this.year = params['year'];
            var day = new Date(_this.year, _this.month, _this.day);
            _this.dayDesc = "יום " + _this.dayService.getDayName(day) + ' ' + _this.day + ' ' + _this.dayService.getMonthName(_this.month) + ' ' + _this.year;
            _this.dayService.getDayDetails(_this.day, _this.month, _this.year)
                .then(function (response) {
                _this.dayDetails = response.json();
                if (!_this.dayDetails)
                    _this.dayDetails = new day_details_1.DayDetails(_this.day, _this.month, _this.year);
            })
                .catch(function (error) { return console.log('error in init day details'); });
        });
    };
    DayDetailsComponent.prototype.save = function () {
        var _this = this;
        this.dayService.saveDayDetails(this.dayDetails)
            .then(function (response) {
            var result = response.text();
            if (result === 'false')
                console.log('Save failed');
            _this.eventsManager.goToMonth(new Date(_this.year, _this.month, 1));
        });
    };
    DayDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'day-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, events_manager_1.EventsManager, day_service_1.DayService])
    ], DayDetailsComponent);
    return DayDetailsComponent;
}());
exports.DayDetailsComponent = DayDetailsComponent;
//# sourceMappingURL=day-details.component.js.map