import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRegisterRoutingModule } from './user-register/user-register-routing.module';
import { UserRegisterModule } from './user-register/user-register.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UserRegisterModule,

  ]
})
export class AuthModule { }
