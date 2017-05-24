import { Component, OnDestroy } from '@angular/core';

import { MenuItem } from './menu-item';
import { ContextMenuService } from './context-menu.service';

@Component({
    moduleId: module.id,
    selector: 'context-menu-holder',
    templateUrl: 'context-menu-holder.component.html',
    host: {'(document:click)':'clickedOutside()'}
})
export class ContextMenuHolderComponent implements OnDestroy {
    menuItems: MenuItem[];
    isShown = false;
    private mouseLocation :{left:number,top:number} = {left:0, top:0};

    constructor(private cmService: ContextMenuService) {
        this.cmService.showContextMenu.subscribe(e => {
            this.showContextMenu(e.event, e.menuItems);
        })
    }

    get locationCss(){ 
        return {
            'position':'fixed',
            'display':this.isShown ? 'inline-block':'none',
            left:this.mouseLocation.left + 'px',
            top:this.mouseLocation.top + 'px',
        };
    }

    showContextMenu(event, menuItems) {
        this.isShown = true;
        this.menuItems = menuItems;
        this.mouseLocation = {
            left:event.clientX,
            top:event.clientY
        };
    }
    
    clickedOutside() {
        this.isShown = false;
    }

    ngOnDestroy(): void {
        this.cmService.showContextMenu.unsubscribe();
    }
}