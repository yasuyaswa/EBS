import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  CustomerEmail : any;

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'http://localhost:5119/';
  GetAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BaseUrl+ 'api/Customers');
  }

  AddCustomer(AddCustomerRequest: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.BaseUrl + 'api/Customers', AddCustomerRequest);
  }

  GetCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.BaseUrl+ 'api/Customers/' +id);
  }

  UpdateCustomer(id: number, UpdateCustomerRequest: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.BaseUrl+'api/Customers/'+id, UpdateCustomerRequest);
  }

  DeleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.BaseUrl+ 'api/Customers/'+id);
  }

  LoginCustomer(LoginCustomerRequest: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.BaseUrl+ 'api/Customers/Login', LoginCustomerRequest);
  }
}
