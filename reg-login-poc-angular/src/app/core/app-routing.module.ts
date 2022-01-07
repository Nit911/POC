import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    UserComponent,
    LoginComponent
  ],
  declarations: [],
})
export class AppRoutingModule { }