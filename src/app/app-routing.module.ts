import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardFormComponent } from './credit-card-form/components/credit-card-form.component'


const routes: Routes = [
  { path: 'credit-card-form', component: CreditCardFormComponent },
  { path: '', redirectTo: 'credit-card-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
