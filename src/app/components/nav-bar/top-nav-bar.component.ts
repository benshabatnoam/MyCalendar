import { Component, OnInit } from '@angular/core';

import { DayService } from '../../services/day.service';

import { EventsManager } from '../../managers/events.manager';

@Component({
    moduleId: module.id,
    selector: 'top-nav-bar',
    templateUrl: 'top-nav-bar.component.html'
})

export class TopNavBarComponent implements OnInit {
    month: number;
    year: number;
    description: string;

    constructor(private dayService: DayService,
        private eventsManager: EventsManager) { }

    ngOnInit(): void {
        this.eventsManager.goToDateEmitter.subscribe((date) => {
            this.init(date);
        });
        this.eventsManager.goToMonthEmitter.subscribe((date) => {
            this.init(date);
        });
        this.eventsManager.goToYearEmitter.subscribe((year) => {
            this.initYear(year);
        })
    }

    init(date: Date) {
        if (date) {
            this.year = date.getFullYear();
            this.month = date.getMonth();
            this.description = this.dayService.getMonthName(this.month) + ' ' + this.year;
        }
    }

    initYear(year: number) {
        if (year) {
            this.year = year;
            this.month = null;
            this.description = year.toString();
        }
    }

    prev() {
        if (this.month || this.month == 0)
            this.prevMonth();
        else
            this.prevYear();
    }
    
    prevMonth() {
        var year = this.year;
        var month = this.month;
        month--;
        if (month == -1) {
            year--;
            month = 11;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    }

    prevYear() {
        this.eventsManager.goToYear(this.year - 1)
    }

    next() {
        if (this.month || this.month == 0)
            this.nextMonth()
        else
            this.nextYear();
    }

    nextMonth() {
        var year = this.year;
        var month = this.month;
        month++;
        if (month == 12) {
            year++;
            month = 0;
        }
        this.eventsManager.goToMonth(new Date(year, month, 1));
    }

    nextYear() {
        this.eventsManager.goToYear(this.year + 1)
    }

    goToYear() {
        this.eventsManager.goToYear(this.year);
    }

    login() {
        alert('login clicked');
    }
}