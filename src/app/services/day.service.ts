import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { DayDetails } from '../models/day-details';

@Injectable()
export class DayService {
	months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
	days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

	serverURL = 'http://localhost/MyCalendar.WebAPI/api/';
	getDayDetailsURL = this.serverURL + 'DayDetails/GetDayDetails';
	saveDayDetailsURL = this.serverURL + 'DayDetails/SaveDayDetails';

	headers = new Headers({ 'Content-Type': 'application/json' });
	options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	getDayName(date: Date) {
		return this.days[date.getDay()];
	}

	getMonthName(month: number) {
		return this.months[month];
	}

	getDayDetails(date: number, month: number, year: number) {
		return this.http.get(`${this.getDayDetailsURL}?date=${date}&month=${month}&year=${year}`)
		.map((res:Response) => res.json());
	}

	saveDayDetails(dayDetails: DayDetails) {
		let json = JSON.stringify(dayDetails);
		return this.http.post(
			this.saveDayDetailsURL, json, this.options);
	}
}