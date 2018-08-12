import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {Logar} from './components/logar.component';

export const loginRouter: Routes = [
 {
    path: 'login', component: Logar, 
    children: [
        {
            path: '', component: LoginComponent 
         }
        ]
 }
]
@NgModule({
  imports: [RouterModule.forChild(loginRouter)],
  exports: [RouterModule]
})
export class LoginRouting {
}
