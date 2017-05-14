import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isLoggedIn: boolean;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}