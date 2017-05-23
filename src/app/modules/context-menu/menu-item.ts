import { Subject } from "rxjs/Subject";

export class MenuItem {
    title: string;
    subject: Subject<any> = new Subject();

    constructor(title: string, execFunc: (func: any) => void) {
        this.title = title;
        this.subject.subscribe(execFunc);
    }

    execute() {
        this.subject.next();
    }
}