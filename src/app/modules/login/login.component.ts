import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    btnDesc: string;
    disconnect: string = 'התנתק';
    connect: string = 'התחבר';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.btnDesc = this.authService.isLoggedIn ? this.disconnect : this.connect;
    }
    
    login() {
        this.authService.login();
        this.btnDesc = this.disconnect;
    }

    logout() {
        this.authService.logout();
        this.btnDesc = this.connect;
    }
}