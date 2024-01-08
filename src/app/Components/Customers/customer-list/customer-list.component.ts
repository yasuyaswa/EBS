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
  customers: Customer[] = [
    // {
    //   id: '13135',
    //   name: 'Yaswanth',
    //   email: 'yaswanth@gmail.com',
    //   phone: '9000454135',
    //   address: 'Banglore',
    // },
    // {
    //   id: '12789',
    //   name: 'Vinod',
    //   email: 'vinod@gmail.com',
    //   phone: '9000454144',
    //   address: 'Chennai'
    // },
    // {
    //   id: '16539',
    //   name: 'Vinay',
    //   email: 'vinay@gmail.com',
    //   phone: '90004543691',
    //   address: 'Hyderabad'
    // }
    
  ];
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

