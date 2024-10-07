import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: UserRegisterComponent
      },
      {
          path: '**',
        redirectTo: 'register'
      }
    ]
  }
]



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class UserRegisterRoutingModule { }
