import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ContextMenuService {
    public showContextMenu: Subject<{event, menuItems}> = new Subject();
}