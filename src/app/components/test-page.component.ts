import { Component, OnInit } from '@angular/core';

import { Subject } from "rxjs/Subject";

import { EventsManager } from '../managers/events.manager';
import { MenuItem } from '../modules/context-menu/menu-item';

@Component({
    templateUrl: 'test-page.component.html',
    styleUrls: [ 'test-page.component.css' ]
})

export class TestPageComponent implements OnInit {
    menuItems: MenuItem[];
    menuItems1: MenuItem[];

    constructor(private eventsManager: EventsManager) {}

    ngOnInit(): void {
        this.menuItems = [
            new MenuItem('This day', event => {
                this.eventsManager.goToDate(new Date());
            }),
            new MenuItem('This month', event => {
                this.eventsManager.goToMonth(new Date());
            }),
            new MenuItem('This year', event => {
                this.eventsManager.goToYear(new Date().getFullYear());
            })
        ];

        this.menuItems1 = [
            new MenuItem('Action 1', event => {
                this.eventsManager.goToDate(new Date());
            }),
            new MenuItem('Action 1', event => {
                this.eventsManager.goToMonth(new Date());
            }),
            new MenuItem('Action 1', event => {
                this.eventsManager.goToYear(new Date().getFullYear());
            })
        ];
    }
}