import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    isLoggedIn: boolean;
    btnDesc: string = 'התחבר';

    login() {
        this.isLoggedIn = !this.isLoggedIn;
        this.btnDesc = this.isLoggedIn ? 'התנתק' : 'התחבר';
    }
}