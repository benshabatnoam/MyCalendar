import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotPermittedComponent } from './not-permitted.component';

const routes: Routes = [
    { path: 'notPermitted', component: NotPermittedComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class TaldorPermissionsRoutingModule {

}

export const TaldorPermissionsComponents = [
    NotPermittedComponent
]