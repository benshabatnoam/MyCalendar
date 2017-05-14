"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var taldor_permissions_service_1 = require("./taldor-permissions.service");
var taldor_permissions_guard_service_1 = require("./taldor-permissions-guard.service");
var TaldorPermissionsModule = (function () {
    function TaldorPermissionsModule() {
    }
    return TaldorPermissionsModule;
}());
TaldorPermissionsModule = __decorate([
    core_1.NgModule({
        providers: [
            taldor_permissions_service_1.TaldorPermissionsService,
            taldor_permissions_guard_service_1.TaldorPermissionsGuard
        ]
    })
], TaldorPermissionsModule);
exports.TaldorPermissionsModule = TaldorPermissionsModule;
exports.TaldorPermissionsProviders = [
    taldor_permissions_service_1.TaldorPermissionsService,
    taldor_permissions_guard_service_1.TaldorPermissionsGuard
];
//# sourceMappingURL=taldor-permissions.module.js.map