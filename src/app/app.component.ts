import { Component } from '@angular/core';
import { Customer } from './Models/customer.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EBS';

  CustomerDetails: Customer = {
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: '',
    customerAddress: '',
  };
}
