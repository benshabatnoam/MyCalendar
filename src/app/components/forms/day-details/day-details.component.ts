import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DayService } from '../../../services/day.service';

import { EventsManager } from '../../../managers/events.manager';

import { DayDetails } from '../../../models/day-details';

import 'rxjs/add/operator/toPromise';

@Component({
	moduleId: module.id,
	templateUrl: 'day-details.component.html',
	styleUrls: ['day-details.component.css']
})

export class DayDetailsComponent implements OnInit {
	dayDesc: string;
	date: number;
	month: number;
	year: number;
	day: Date;
	dayDetails: DayDetails;
	
	constructor (private aRoute: ActivatedRoute, private eventsManager: EventsManager, private dayService: DayService) { }

	ngOnInit(): void {
		this.aRoute.params.subscribe(params => {
			this.date = +params['day'];
			this.month = +params['month'];
			this.year = +params['year'];

			this.day = new Date(this.year, this.month, this.date);
			this.dayDesc = "יום " + this.dayService.getDayName(this.day) + ' ' + this.date + ' ' +
				this.dayService.getMonthName(this.month) + ' ' + this.year;
			
			this.dayService.getDayDetails(this.date, this.month, this.year)
			.subscribe(data => {
				this.dayDetails = data;
			});
		});
	}

	gotData(response) {
		if (response.text()) {
			this.dayDetails = response.json()[0] as DayDetails;
		}
		if (!this.dayDetails) {
			this.dayDetails = new DayDetails(this.date, this.month, this.year);
		}
	}
	
	save() {
		this.dayService.saveDayDetails(this.dayDetails)
			.toPromise()
			.then(response => {
				let result = response.text();
				if (result === 'false')
					console.log('Save failed');
				this.eventsManager.goToMonth(new Date(this.year, this.month, 1));
			});
	}

	cancel() {
		this.eventsManager.goToMonth(this.day);
	}
}