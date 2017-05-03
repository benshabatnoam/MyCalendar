"use strict";
var Day = (function () {
    function Day(date, month) {
        this.date = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.inMonth = date.getMonth() == month;
        var today = new Date();
        this.isToday = today.getFullYear() == date.getFullYear() &&
            today.getMonth() == date.getMonth() &&
            today.getDate() == date.getDate();
    }
    return Day;
}());
exports.Day = Day;
//# sourceMappingURL=day.js.map