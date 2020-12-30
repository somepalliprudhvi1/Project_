import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards';

const routes: Routes = [
  {path:'', component: LoginComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo:''}
];
export const routing = RouterModule.forRoot(routes);
