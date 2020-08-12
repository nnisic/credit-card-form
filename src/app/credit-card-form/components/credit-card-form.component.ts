import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

  creditCardNumber: String = '1610 4518 0622 3845';
  cardHolderTitle: String = 'Card Holder';
  cardHolderName: String = 'Nikola Nisic';
  expiresTitle: String = 'Expires';
  expiresMonthValue: String = '06';
  expiresYearValue: String = '23';

  constructor() { }

  ngOnInit() {
  }

}
