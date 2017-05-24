import { Directive, Input } from '@angular/core';

import { MenuItem } from './menu-item';
import { ContextMenuService } from './context-menu.service';

@Directive({
    selector: '[context-menu]',
    host: {'(contextmenu)':'rightClicked($event)'}
})
export class ContextMenuDirective {
    @Input('context-menu') menuItems: MenuItem[];

    constructor(private cmService: ContextMenuService) {}
    
    rightClicked(event: MouseEvent) {
        this.cmService.showContextMenu.next({event:event, menuItems:this.menuItems});
        event.preventDefault();
    }
}