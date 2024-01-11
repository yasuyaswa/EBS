import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Models/payment.models';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService, private router: Router) {}
  ngOnInit(): void {
    this.paymentService.GetAllPayments()
    .subscribe({
      next: (payments) => {
      // console.log(customers);
      this.payments = payments;
    },
    error: (error) => {
      console.error('Error fetching customers: ' + error)
    },
    complete: () => {
      console.log('Request completed successfully');
    }
  }
  );
  }

  DeletePayment(id: number) {
    this.paymentService.DeletePayment(id).subscribe({
      next: (response) => {
        //this.router.navigate(['Customer']);
        window.location.reload();
      },
    });
  }
}
