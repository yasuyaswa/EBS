import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/Models/payment.models';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
  PaymentDetails: Payment= {
    paymentId: 0,
    paymentDate: new Date(),
    customerId: 0,
    billId: 0,
    paymentStatus: ''
  }

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString) {
          const id = +idString;
          this.paymentService.GetPayment(id).subscribe({
            next: (response) => {
              this.PaymentDetails = response;
            },
          });
        }
      },
    });
  }

  UpdatePayment() {
    this.paymentService
      .UpdatePayment(this.PaymentDetails.paymentId, this.PaymentDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['Payment']);
        },
      });
  }

  DeletePayment(id: number) {
    this.paymentService.DeletePayment(id).subscribe({
      next: (response) => {
        this.router.navigate(['Payment']);
      },
    });
  }
}
