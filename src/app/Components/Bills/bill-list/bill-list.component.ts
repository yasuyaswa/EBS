import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/Models/bill.models';
import { BillsService } from 'src/app/Services/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
})
export class BillListComponent implements OnInit{
  bills: Bill[] = [];

  constructor(private billService: BillsService, private router: Router) {}

  ngOnInit(): void {
    this.billService.GetAllBills().subscribe({
      next: (bills) => {
        // console.log(customers);
        this.bills = bills;
      },
      error: (error) => {
        console.error('Error fetching customers: ' + error);
      },
      complete: () => {
        console.log('Request completed successfully');
      },
    });
  }

  DeleteBill(id: number) {
    this.billService.DeleteBill(id).subscribe({
      next: (response) => {
        window.location.reload();
      },
    });
  }
}
