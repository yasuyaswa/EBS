import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'http://localhost:5119/';
  GetAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BaseUrl+ 'api/Customers');
  }

  AddCustomer(AddCustomerRequest: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.BaseUrl + 'api/Customer', AddCustomerRequest);
  }

  GetCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.BaseUrl+ 'api/Customer/' +id);
  }

  UpdateCustomer(id: number, UpdateCustomerRequest: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.BaseUrl+'api/Customer/'+id, UpdateCustomerRequest);
  }

  DeleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.BaseUrl+ 'api/Customer/'+id);
  }
}
