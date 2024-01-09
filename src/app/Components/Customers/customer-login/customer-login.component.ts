import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { CustomersService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  
  LoginCustomerRequest: Customer={
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: '',
    customerAddress: ''
  };
  constructor(private customerService: CustomersService, private router: Router) {};

  ngOnInit(): void {};

  LoginCustomer() {
    this.customerService.LoginCustomer(this.LoginCustomerRequest).subscribe({
      next: (response) => {
        // Handle successful login response
        console.log('Login successful', response);
        alert('Login successful');
        // Optionally, you can navigate to a different page after successful login
        this.router.navigate(['/Customer']);
      },
      error: (error) => {
        // Handle login error
        console.error('Login failed', error);
        alert('Invalid Credentials');
        // Optionally, you can display an error message to the user
      }
    });
  }
}
