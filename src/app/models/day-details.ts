export class DayDetails {
    date: number;
    month: number;
    year: number;
    arvit: boolean;
    arvitInMinyan: boolean;
    minha: boolean;
    minhaInMinyan: boolean;
    shaharit: boolean;
    shaharitInMinyan: boolean;
    limud: boolean;

    constructor(date: number, month: number, year: number) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
}