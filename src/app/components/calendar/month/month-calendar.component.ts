import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DayService } from '../../../services/day.service';

import { EventsManager } from '../../../managers/events.manager';

import { Day } from '../../../models/day';

@Component({
    moduleId: module.id,
    templateUrl: 'month-calendar.component.html',
    styleUrls: ['../calendar.css']
})

export class MonthCalendarComponent implements OnInit {
    weeks: any[];
    sundays: Date[];
    month: number;
    monthName: string;
    year: number;
    
    constructor(private aRoute: ActivatedRoute, private dayService: DayService, private eventsManager: EventsManager) { }

    ngOnInit(): void {
        this.aRoute.params.subscribe(params => {
            this.initMonth(params['year'], params['month']);
        });
    }
    
    initMonth(year: number, month: number) {
        this.year = year;
        this.month = month;
        this.monthName = this.dayService.getMonthName(this.month);
        this.initWeeks();
    }

    initWeeks() {
        this.weeks = [];
        var week: Day[] = [];
        var firstMonthDate = new Date(this.year, this.month, 1);
        if (!this.isSunday(firstMonthDate)) {
            var preSunday = this.getPrevSunday();
            week = this.getWeekDates(preSunday);
            this.weeks.push(week);
        }
        var date = firstMonthDate;
        while (this.weeks.length < 6) {
            if (this.isSunday(date)) {
                week = this.getWeekDates(date);
                this.weeks.push(week);
            }
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
    }

    getPrevSunday() {
        var date = new Date(this.year, this.month, 0);
        while (!this.isSunday(date)) {
            date = new Date(this.year, date.getMonth(), date.getDate() - 1);
        }
        return date;
    }

    isSunday(date: Date) {
        return date.getDay() == 0;
    }

    getWeekDates(sunday: Date) {
        var days: Day[] = [];
        days.push(new Day(sunday, this.month));
        var date = sunday;
        while (!this.isSaturday(date)) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            days.push(new Day(date, this.month));
        }
        return days;
    }

    isSaturday (date: Date) {
        return date.getDay() == 6;
    }

    goToDate(day: Day) {
        this.eventsManager.goToDate(new Date(day.year, day.month, day.date));
    }
}