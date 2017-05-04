import { Component, Input } from '@angular/core';
import { Day } from '../../models/day';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css']
})

export class DayComponent {
    @Input() day: Day;
    @Input() month: number;
}