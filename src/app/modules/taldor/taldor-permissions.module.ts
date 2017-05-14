import { NgModule } from '@angular/core';

import { TaldorPermissionsService } from './taldor-permissions.service';

import { TaldorPermissionsGuard } from './taldor-permissions-guard.service';

import {
    TaldorPermissionsRoutingModule,
    TaldorPermissionsComponents
 } from './taldor-permissions-routing.module';

@NgModule({
    imports: [
        TaldorPermissionsRoutingModule
    ],
    declarations: [
        TaldorPermissionsComponents
    ],
    providers: [
        TaldorPermissionsService,
        TaldorPermissionsGuard
    ]
})

export class TaldorPermissionsModule {

}