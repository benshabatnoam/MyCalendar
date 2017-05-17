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
var http_1 = require("@angular/http");
require("rxjs/add/Operator/catch");
var TaldorPermissionsService = (function () {
    function TaldorPermissionsService(http) {
        this.http = http;
        this.serviceUrl = 'http://localhost/Permissions/services/api/Permissions/';
    }
    TaldorPermissionsService.prototype.isPermitted = function (url) {
        return this.http
            .post(this.serviceUrl + 'IsPermitted?url=' + url, null, { withCredentials: true })
            .map(function (response) {
            return response.text().toString() == 'true';
        })
            .catch(function (error) {
            console.error('error in isPermitted. error: ' + error);
        });
    };
    return TaldorPermissionsService;
}());
TaldorPermissionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaldorPermissionsService);
exports.TaldorPermissionsService = TaldorPermissionsService;
//# sourceMappingURL=taldor-permissions.service.js.map