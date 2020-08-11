import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import main credit card form component
import { CreditCardFormModule } from './credit-card-form/credit-card-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
