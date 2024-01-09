import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Customer} from 'src/app/Models/customer.models'
import { CustomersService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  AddCustomerRequest: Customer ={
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: '',
    customerAddress: ''
  };

  constructor(private customerService: CustomersService, private router: Router) {}
  ngOnInit(): void {
  }
  AddCustomer(){
    this.customerService.AddCustomer(this.AddCustomerRequest).subscribe({
      next: (customer) =>{
        // console.log(customer);
        this.router.navigate(['Customer']);
      }
    });
    // console.log(this.AddCustomerRequest);
  }
}
