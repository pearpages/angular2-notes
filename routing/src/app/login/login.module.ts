import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService, AuthGuard } from './../auth';
import { loginRoutedComponents, LoginRoutingModule } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
        ],
    providers: [AuthGuard, AuthService],
    declarations: [loginRoutedComponents]
})
export class LoginModule { }
