# Router Hooks

The example will have the:

- service
- login compoonent
- protected component
- guard
- router

## Service

```typescript
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    login(user: string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username',user);
            return true;
        }
        return false;
    }

    logout(): any {
        localStorage.removeItem('username');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [
    {provide: AuthService, useClass: AuthService}
    ];
```

## Component

```typescript
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService) {
        this.message = '';
    }

    login(username: string, password: string): boolean {
        this.message = '';
        if(!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
            setTimeout(function () {
                this.message = '';
            }.bind(this),2500);
        }
        return false;
    }

    logout(): boolean {
        this.authService.logout();
        return false;
    }
}
```

## Protected Component

```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'protected',
    template: `<h1>Protected content<h1>`
})
export class ProtectedComponent {}
```

## Guard

```typescript
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from 'services/AuthService';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(): boolean {
        return this.authService.isLoggedIn();
    }
}
```

## Router

```typescript
import {AUTH_PROVIDERS} from 'services/AuthService';
import {LoggedInGuard} from 'guards/loggedIn.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'protected', component: ProctectedComponent, canActivate: [LoggedInGuard] }
];
```