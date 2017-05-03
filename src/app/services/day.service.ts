import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DayDetails } from '../models/day-details';

@Injectable()
export class DayService {
    months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]
    days = [ 'ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
    
    serverURL = 'http://localhost/MyCalendarServer/';
    getDayDetailsURL = this.serverURL + 'DayDetails/GetDayDetails';
    saveDayDetailsURL = this.serverURL + 'DayDetails/SaveDayDetails';
    
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {
        
    }

    getDayName(date: Date) {
        return this.days[date.getDay()];
    }

    getMonthName(month: number) {
        return this.months[month];
    }

    getDayDetails(date: number, month: number, year: number) {
        return this.http.post(this.getDayDetailsURL, { date, month, year }, this.options)
            .toPromise();
    }

    saveDayDetails(dayDetails: DayDetails) {
        let json = JSON.stringify(dayDetails);
        return this.http.post(this.saveDayDetailsURL, { dayDetails: json }, this.options)
            .toPromise();
    }
}