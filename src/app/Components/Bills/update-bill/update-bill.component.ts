import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/Models/bill.models';
import { BillsService } from 'src/app/Services/bill.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css'],
})
export class UpdateBillComponent implements OnInit {
  BillDetails: Bill = {
    billId: 0,
    billGenDate: new Date(),
    customerId: 0,
    perUnitCost: 0,
    totalUnits: 0,
    billAmount: 0,
    billDueDate: new Date(),
  };

  constructor(
    private route: ActivatedRoute,
    private billService: BillsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString) {
          const id = +idString;
          this.billService.GetBill(id).subscribe({
            next: (response) => {
              this.BillDetails = response;
            },
          });
        }
      },
    });
  }

  UpdateBill() {
    this.billService
      .UpdateBill(this.BillDetails.billId, this.BillDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['Bill']);
        },
      });
  }

  DeleteBill(id: number) {
    this.billService.DeleteBill(id).subscribe({
      next: (response) => {
        this.router.navigate(['Bill']);
      },
    });
  }
}
