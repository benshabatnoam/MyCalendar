import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ContextMenuService {
    public show: Subject<{event, menuItems}> = new Subject();
}