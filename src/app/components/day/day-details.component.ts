import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DayService } from '../../services/day.service';

import { EventsManager } from '../../managers/events.manager';

import { DayDetails } from '../../models/day-details';

@Component({
    moduleId: module.id,
    templateUrl: 'day-details.component.html'
})

export class DayDetailsComponent implements OnInit {
    dayDesc: string;
    day: number;
    month: number;
    year: number;
    dayDetails: DayDetails;
    arvit: boolean;
    arvitChanged = new EventEmitter<boolean>();

    constructor (private aRoute: ActivatedRoute, private eventsManager: EventsManager,
    private dayService: DayService) {
        this.arvit = false;
    }

    ngOnInit(): void {
        this.aRoute.params.subscribe(params => {
            this.day = params['day'];
            this.month = params['month'];
            this.year = params['year'];

            let day = new Date(this.year, this.month, this.day);
            this.dayDesc = "יום " + this.dayService.getDayName(day) + ' ' + this.day + ' ' + this.dayService.getMonthName(this.month) + ' ' + this.year;
            
            this.dayService.getDayDetails(this.day, this.month, this.year)
                .then(response =>  {
                    this.dayDetails = response.json() as DayDetails;
                    if (!this.dayDetails)
                        this.dayDetails = new DayDetails(this.day, this.month, this.year);
                })
                .catch(error => console.log('error in init day details'));
        })
    }
    
    save() {
        this.dayService.saveDayDetails(this.dayDetails)
            .then(response => {
                let result = response.text();
                if (result === 'false')
                    console.log('Save failed');
                this.eventsManager.goToMonth(new Date(this.year, this.month, 1));
            });
    }
}