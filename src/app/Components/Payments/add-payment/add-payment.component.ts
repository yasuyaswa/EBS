import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Models/payment.models';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit{
  AddPaymentRequest: Payment= {
    paymentId: 0,
    paymentDate: new Date(),
    customerId: 0,
    billId: 0,
    paymentStatus: ''
  }

  constructor(private paymentService: PaymentService, private router: Router) {}
  ngOnInit(): void {}

  AddPayment(){
    this.paymentService.AddPayment(this.AddPaymentRequest).subscribe({
      next: (payment) =>{
        this.router.navigate(['Payment']);
      }
    });
  }
}
