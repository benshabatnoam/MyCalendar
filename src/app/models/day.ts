export class Day {
    isToday: Boolean;
    date: number;
    month: number;
    year: number;
    inMonth: Boolean;
    
    constructor(date: Date, month: number) {
        this.date = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.inMonth = date.getMonth() == month;
        var today = new Date();
        this.isToday = today.getFullYear() == date.getFullYear() &&
            today.getMonth() == date.getMonth() &&
            today.getDate() == date.getDate();
    }
}