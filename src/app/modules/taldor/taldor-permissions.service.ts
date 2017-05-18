import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/Operator/catch';

@Injectable()
export class TaldorPermissionsService {
    serviceUrl: string = 'http://localhost//Permissions/PermissionsServices/PermissionsServices/api/Permissions/';
    permissions: string[];

    constructor(private http: Http) { }

    isPagePermitted(url: string): Observable<boolean> | boolean {
        if (!this.permissions) {
            return this.http.get(this.serviceUrl + 'GetPagePermissions')
                .map((response) => {
                    this.permissions = response.json().split(';');
                    return this.permissions.includes(url);
                })
                .catch((error): any => {
                    console.error('error in isPermitted. error: ' + error)
                    return false;
                });
        }
        else {
            return this.permissions.includes(url);
        }
    }

    isComponentPermitted(component: string): Observable<boolean> {
        return this.http
            .post(
                this.serviceUrl + 'IsComponentPermitted?component=' + component,
                null
            )
            .map((response) => {
                return response.text().toString() == 'true';
            })
            .catch((error): any => {
                console.error('error in isPermitted. error: ' + error)
            });
    }
}