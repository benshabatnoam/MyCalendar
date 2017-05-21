import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/Operator/catch';

import {
    TaldorPagesComponentsPermissionsDictionary,
    TaldorComponentPermissions
} from './models/taldor-permissions.models';

@Injectable()
export class TaldorPermissionsService {
    serviceUrl: string = 'http://localhost//Permissions/PermissionsServices/PermissionsServices/api/Permissions/';
    permissions: TaldorPagesComponentsPermissionsDictionary = {};

    constructor(private http: Http) { }

    isPagePermitted(url: string): Observable<boolean> | boolean {
        if (!this.permissions[url]) {
            return this.http.post(this.serviceUrl + 'GetPagePermissions?url=' + url, null)
                .map((response) => {
                    this.permissions[url] = response.json();
                    if (this.permissions[url] && this.permissions[url].components) {
                        var componentPermissions: TaldorComponentPermissions[] = [];
                        for (var key in this.permissions[url].components) {
                            componentPermissions.push(this.permissions[url].components[key]);
                        }
                        this.permissions[url].components = {};
                        componentPermissions.forEach(key => {
                            this.permissions[url].components[key.name] = key;
                        });
                    }
                    return this.permissions[url].isPermitted;
                })
                .catch((error): any => {
                    console.error('error in isPermitted. error: ' + error)
                    return false;
                });
        }
        else {
            return this.permissions[url].isPermitted;
        }
    }

    isComponentPermitted(url: string, component: string): boolean {
        return this.permissions[url] &&
            this.permissions[url].isPermitted &&
            this.permissions[url].components[component] &&
            this.permissions[url].components[component].isPermitted;
    }
}