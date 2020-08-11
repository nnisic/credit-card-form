import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFormComponent } from './components/credit-card-form.component';



@NgModule({
  declarations: [CreditCardFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreditCardFormComponent
  ]
})
export class CreditCardFormModule { }
