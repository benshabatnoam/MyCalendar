import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

import { Month } from '../../../models/month';

import { DayService} from '../../../services/day.service';

import { EventsManager } from '../../../managers/events.manager';

@Component({
    moduleId: module.id,
    templateUrl: 'year-calendar.component.html',
    styleUrls: [ '../calendar.css' ]
})

export class YearCalendarComponent implements OnInit {
    year: number;
    quarters: any[];

    constructor(private aRoute: ActivatedRoute, private eventManger: EventsManager, private dayService: DayService) { }

    ngOnInit(): void {
         this.aRoute.params.subscribe(params => {
             this.year = +params['year'];
        });
        this.initQuarters();
    }

    initQuarters() {
        this.quarters = [];
        var months: string[] = this.dayService.months;
        for (var quarterIndex = 0; quarterIndex <= 3; quarterIndex++) {
            var quarter: Month[] = [];
            for (var monthIndexInQuarter = 0; monthIndexInQuarter <= 2; monthIndexInQuarter++) {
                var monthIndex = monthIndexInQuarter + (quarterIndex * 3);
                quarter.push(new Month(months[monthIndex], monthIndex));
            }
            this.quarters.push(quarter);
        }
    }

    goToMonth(month: number) {
        this.eventManger.goToMonth(new Date(this.year, month, 1));
    }
}