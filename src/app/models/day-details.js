"use strict";
var DayDetails = (function () {
    function DayDetails(date, month, year) {
        this.kitza = false;
        this.arvit = false;
        this.arvitInMinyan = false;
        this.minha = false;
        this.minhaInMinyan = false;
        this.shaharit = false;
        this.shaharitInMinyan = false;
        this.limud = false;
        this.alaha = false;
        this.lashonAra = false;
        this.musar = false;
        this.humash = false;
        this.mishna = false;
        this.gmara = false;
        this.gitara = false;
        this.date = date;
        this.month = month;
        this.year = year;
    }
    return DayDetails;
}());
exports.DayDetails = DayDetails;
//# sourceMappingURL=day-details.js.map