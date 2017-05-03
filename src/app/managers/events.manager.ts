import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsManager {
    public goToDateEmitter: BehaviorSubject<Date> = new BehaviorSubject(null);
    public goToMonthEmitter: BehaviorSubject<Date> = new BehaviorSubject(null);
    public goToYearEmitter: BehaviorSubject<number> = new BehaviorSubject(null);

    goToDate(date: Date) {
        this.goToDateEmitter.next(date);
    }

    goToMonth(date: Date) {
        this.goToMonthEmitter.next(date);
    }

    goToYear(year: number) {
        this.goToYearEmitter.next(year);
    }
}