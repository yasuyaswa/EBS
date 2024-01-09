import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/Models/bill.models';
import { BillsService } from 'src/app/Services/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {
AddBillRequest: Bill ={
  billId: 0,
   billGenDate: new Date(),
    customerId: 0,
    perUnitCost: 0,
    totalUnits: 0,
    billAmount: 0,
    billDueDate: new Date()
}

  constructor(private billService: BillsService, private router: Router) {}
  ngOnInit(): void {
  }

  AddBill(){
    this.billService.AddBill(this.AddBillRequest).subscribe({
      next: (bill) =>{
        this.router.navigate(['Bill']);
      }
    });
  }

  calculateBillAmount(): void {
    // Perform the calculation based on perUnitCost and totalUnits
    this.AddBillRequest.billAmount = this.AddBillRequest.perUnitCost * this.AddBillRequest.totalUnits;
    // Calculate billDueDate as 20 days from billGenDate
    const dueDate = new Date(this.AddBillRequest.billGenDate);
    dueDate.setDate(dueDate.getDate() + 20);
    this.AddBillRequest.billDueDate = dueDate;
  }

}
