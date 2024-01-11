import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../Models/payment.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'http://localhost:5119/';
  GetAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.BaseUrl+ 'api/Payments');
  }

  AddPayment(AddPaymentRequest: Payment): Observable<Payment>{
    return this.http.post<Payment>(this.BaseUrl + 'api/Payments', AddPaymentRequest);
  }

  GetPayment(id: number): Observable<Payment>{
    return this.http.get<Payment>(this.BaseUrl+ 'api/Payments/' +id);
  }

  UpdatePayment(id: number, UpdatePaymentRequest: Payment): Observable<Payment>{
    return this.http.put<Payment>(this.BaseUrl+'api/Payments/'+id, UpdatePaymentRequest);
  }

  DeletePayment(id: number): Observable<Payment>{
    return this.http.delete<Payment>(this.BaseUrl+ 'api/Payments/'+id);
  }
}
