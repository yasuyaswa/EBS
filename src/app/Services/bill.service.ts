import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../Models/bill.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'http://localhost:5119/';
  GetAllBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.BaseUrl+ 'api/Bills');
  }

  AddBill(AddBillRequest: Bill): Observable<Bill>{
    return this.http.post<Bill>(this.BaseUrl+ 'api/Bills', AddBillRequest);
  }

  GetBill(id: number): Observable<Bill>{
    return this.http.get<Bill>(this.BaseUrl+'api/Bills/'+id);
  }

  UpdateBill(id: number, UpdateBillRequest: Bill): Observable<Bill>{
    return this.http.put<Bill>(this.BaseUrl+'api/Bills/'+id, UpdateBillRequest);
  }

  DeleteBill(id: number): Observable<Bill>{
    return this.http.delete<Bill>(this.BaseUrl+'api/Bills/'+id);
  }
}
