import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/Operator/catch';

@Injectable()
export class TaldorPermissionsService {
    serviceUrl: string = 'http://localhost/Permissions/services/api/Permissions/';

    constructor(private http: Http) { }

    isPermitted(url: string): Observable<boolean> {
        return this.http
            .post(
                this.serviceUrl + 'IsPermitted?url=' + url,
                null,
                { withCredentials: true}
            )
            .map((response) => {
                return response.text().toString() == 'true';
            })
            .catch((error): any => {
                console.error('error in isPermitted. error: ' + error)
            });
    }
}