import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { TaldorPermissionsService } from './taldor-permissions.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Operator/catch';

@Injectable()
export class TaldorPermissionsGuard implements CanActivate {
    constructor(private permissionsService: TaldorPermissionsService,
    private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        var response = this.permissionsService.isPagePermitted(state.url);
        if (typeof response === 'boolean')
            return this.handleResponse(response);
        else {
            return (response as Observable<boolean>)
                .map(response => {
                    return this.handleResponse(response);
                })
                .catch((error): any => {
                    return false;
                });;
        }
    }

    handleResponse(response: boolean): boolean {
        if (response)
            return true;
        else {
            this.router.navigateByUrl('notPermitted');
            return false;
        }
    }
}