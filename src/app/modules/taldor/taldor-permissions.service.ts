import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/Operator/catch';

@Injectable()
export class TaldorPermissionsService {
    serviceUrl: string = 'http://localhost//Permissions/PermissionsServices/PermissionsServices/api/Permissions/';
    permissions: { [url: string]: any } = {};

    constructor(private http: Http) { }

    isPagePermitted(url: string): Observable<boolean> | boolean {
        if (!this.permissions[url]) {
            return this.http.post(this.serviceUrl + 'GetPagePermissions?url=' + url, null)
                .map((response) => {
                    this.permissions[url] = response.json();
                    return this.permissions[url].IsPermitted;
                })
                .catch((error): any => {
                    console.error('error in isPermitted. error: ' + error)
                    return false;
                });
        }
        else {
            return this.permissions[url].IsPermitted;
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