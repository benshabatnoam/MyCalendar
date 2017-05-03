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
var events_manager_1 = require('./events.manager');
var NavigateManager = (function () {
    function NavigateManager(router, eventsManager) {
        this.router = router;
        this.eventsManager = eventsManager;
    }
    NavigateManager.prototype.init = function () {
        var _this = this;
        this.eventsManager.goToDateEmitter.subscribe(function (date) {
            if (date)
                _this.router.navigate([date.getFullYear(), date.getMonth(), date.getDate()]);
        });
        this.eventsManager.goToMonthEmitter.subscribe(function (date) {
            if (date)
                _this.router.navigate([date.getFullYear(), date.getMonth()]);
        });
        this.eventsManager.goToYearEmitter.subscribe(function (year) {
            if (year)
                _this.router.navigate([year]);
        });
    };
    NavigateManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, events_manager_1.EventsManager])
    ], NavigateManager);
    return NavigateManager;
}());
exports.NavigateManager = NavigateManager;
//# sourceMappingURL=navigate.manager.js.map