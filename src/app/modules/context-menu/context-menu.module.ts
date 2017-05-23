import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ContextMenuService } from './context-menu.service';
import { ContextMenuHolderComponent } from './context-menu-holder.component';
import { ContextMenuDirective } from './context-menu.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        ContextMenuHolderComponent,
        ContextMenuDirective
    ],
    declarations: [
        ContextMenuHolderComponent,
        ContextMenuDirective
    ],
    providers: [
        ContextMenuService
    ]
})
export class ContextMenuModule {

}