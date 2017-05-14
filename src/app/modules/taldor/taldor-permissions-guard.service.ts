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

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.permissionsService.isPermitted(state.url)
            .map(response => {
                if (response)
                    return true;
                else {
                    this.router.navigateByUrl('notPermitted');
                    return false;
                }
            })
            .catch((error): any => {
                return false;
            });;
    }
}