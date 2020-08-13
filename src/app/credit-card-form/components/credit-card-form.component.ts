import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  // FORM CONTROL DECLARATIONS:
  cardNumber = new FormControl('#### #### #### ####');
  cardHolderName = new FormControl('\xa0');
  expiryMonth = new FormControl('MM');
  expiryYear = new FormControl('YY');


  cardHolderTitle: string = 'Card Holder';
  expiresTitle: string = 'Expires';


  monthOptions: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  currentYear = new Date(Date.now()).getFullYear();

  yearOptions: string[] = Array.from(Array(13).keys()).map(x => (x + this.currentYear).toString());

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  updateCardNumber(event: any) {
    console.log(event.key);
  }

}
