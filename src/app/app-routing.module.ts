import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {BadTransactionComponent} from './bad-transaction/bad-transaction.component';
import {BadTransactionDetailsComponent} from './bad-transaction-details/bad-transaction-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'forgot_password/:token', component: ForgotPasswordComponent },
  { path: 'home', component: BadTransactionComponent },
  { path: 'badTransactionDetails/:id', component: BadTransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
