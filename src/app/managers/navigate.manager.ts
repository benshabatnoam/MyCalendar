import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EventsManager } from './events.manager';

@Injectable()
export class NavigateManager {
    constructor(private router: Router, private eventsManager: EventsManager) { }

    init() {
        this.eventsManager.goToDateEmitter.subscribe((date) => {
            if (date) {
                this.router.navigate([
                    'day',
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                ]);
            }
        });
        this.eventsManager.goToMonthEmitter.subscribe((date) => {
            if (date) {
                this.router.navigate([
                    'month',
                    date.getFullYear(),
                    date.getMonth()
                ]);
            }
        });
        this.eventsManager.goToYearEmitter.subscribe((year) => {
            if (year)
                this.router.navigate([ 'year', year ]);
        });
    }
}