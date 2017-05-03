import { Component, OnInit } from '@angular/core';

import { EventsManager } from './managers/events.manager';
import { NavigateManager } from './managers/navigate.manager';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent implements OnInit {
    showSidebar: boolean = false;

    constructor (private eventsManager: EventsManager,
        private navigateManager: NavigateManager) { }

    ngOnInit(): void {
        this.navigateManager.init();

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        this.eventsManager.goToMonth(today);
    }
}
