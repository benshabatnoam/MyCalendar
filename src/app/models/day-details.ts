export class DayDetails {
    date: number;
    month: number;
    year: number;
    kitza: boolean = false;
    arvit: boolean = false;
    arvitInMinyan: boolean = false;
    minha: boolean = false;
    minhaInMinyan: boolean = false;
    shaharit: boolean = false;
    shaharitInMinyan: boolean = false;
    limud: boolean = false;
    alaha: boolean = false;
    lashonAra: boolean = false;
    musar: boolean = false;
    humash: boolean = false;
    mishna: boolean = false;
    gmara: boolean = false;
    gitara: boolean = false;

    constructor(date: number, month: number, year: number) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
}