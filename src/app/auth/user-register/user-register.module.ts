import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register.component';




@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserRegisterModule { }
