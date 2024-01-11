import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { CustomersService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  
  constructor(private customerService: CustomersService, private router: Router) {}
  DeleteCustomer(id: number) {
    this.customerService.DeleteCustomer(id).subscribe({
      next: (response) => {
        //this.router.navigate(['Customer']);
        window.location.reload();
      },
    });
  }

  ngOnInit(): void {
    this.customerService.GetAllCustomers()
    .subscribe({
      next: (customers) => {
      // console.log(customers);
      this.customers = customers;
    },
    error: (error) => {
      console.error('Error fetching customers: ' + error)
    },
    complete: () => {
      console.log('Request completed successfully');
    }
  }
  );
    // this.customers.push();
  }
  
  
}

