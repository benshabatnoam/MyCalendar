import { NgModule } from '@angular/core';

import { TaldorPermissionsService } from './taldor-permissions.service';

import { TaldorPermissionsGuard } from './taldor-permissions-guard.service';

import { TaldorPermissionsDirective } from './taldor-permissions.directive';

import {
    TaldorPermissionsRoutingModule,
    TaldorPermissionsComponents
 } from './taldor-permissions-routing.module';

@NgModule({
    imports: [
        TaldorPermissionsRoutingModule
    ],
    exports: [
        TaldorPermissionsDirective
    ],
    declarations: [
        TaldorPermissionsComponents,
        TaldorPermissionsDirective
    ],
    providers: [
        TaldorPermissionsService,
        TaldorPermissionsGuard
    ]
})

export class TaldorPermissionsModule {

}