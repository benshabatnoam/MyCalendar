import { Component, OnInit } from '@angular/core';

import { DayService } from '../../services/day.service';

import { EventsManager } from '../../managers/events.manager';

@Component({
    moduleId: module.id,
    selector: 'right-nav-bar',
    templateUrl: 'right-nav-bar.component.html',
    styleUrls: [ 'right-nav-bar.component.css' ]
})

export class RightNavBarComponent implements OnInit {
    today: Date;
    todayDesc: string;
    monthDesc: string;
    year: number;
    
    constructor(private dayService: DayService, private eventsManager: EventsManager) { }
    
    ngOnInit(): void {
        this.today = new Date();
        let date = this.today.getDate();
        let dateDesc = date.toString();
        if (dateDesc.length == 1)
            dateDesc = '0' + dateDesc;
        this.year = this.today.getFullYear();
        let month = this.today.getMonth();
        this.monthDesc = this.dayService.getMonthName(month);
        this.todayDesc = this.dayService.getDayName(this.today) + ' ' + dateDesc;
    }

    goToToday() {
        this.eventsManager.goToDate(this.today);
    }

    goToMonth() {
        this.eventsManager.goToMonth(this.today);
    }
    
    goToYear() {
        this.eventsManager.goToYear(this.year);
    }
}