import { NgModule } from '@angular/core';

import { TaldorPermissionsService } from './taldor-permissions.service';

import { TaldorPermissionsGuard } from './taldor-permissions-guard.service';

@NgModule({
    providers: [
        TaldorPermissionsService,
        TaldorPermissionsGuard
    ]
})

export class TaldorPermissionsModule {

}

export const TaldorPermissionsProviders = [
    TaldorPermissionsService,
    TaldorPermissionsGuard
]