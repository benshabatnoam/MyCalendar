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
var taldor_permissions_service_1 = require("./taldor-permissions.service");
require("rxjs/add/Operator/catch");
var TaldorPermissionsGuard = (function () {
    function TaldorPermissionsGuard(permissionsService, router) {
        this.permissionsService = permissionsService;
        this.router = router;
    }
    TaldorPermissionsGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.permissionsService.isPermitted(state.url)
            .map(function (response) {
            if (response)
                return true;
            else {
                _this.router.navigateByUrl('notPermitted');
                return false;
            }
        })
            .catch(function (error) {
            return false;
        });
        ;
    };
    return TaldorPermissionsGuard;
}());
TaldorPermissionsGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [taldor_permissions_service_1.TaldorPermissionsService,
        router_1.Router])
], TaldorPermissionsGuard);
exports.TaldorPermissionsGuard = TaldorPermissionsGuard;
//# sourceMappingURL=taldor-permissions-guard.service.js.map