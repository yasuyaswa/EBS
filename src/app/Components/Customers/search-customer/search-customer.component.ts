import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer.models';
import { CustomersService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  CustomerDetails: Customer = {
    customerId: 0,
    customerName: '',
    customerEmail: '',
    customerMobile: 0,
    customerPassword: '',
    customerAddress: '',
  };

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomersService,
    private router: Router
  ) {}

  GetCustomerById(id: number){
    this.customerService
      .GetCustomer(this.CustomerDetails.customerId)
      .subscribe({
        next: (response) => {
          this.router.navigate(['Customer']);
        },
      });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString) {
          const id = +idString;
          this.customerService.GetCustomer(id).subscribe({
            next: (response) => {
              this.CustomerDetails = response;
            },
          });
        }
      },
    });
  }
}
