import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Models/admin.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  BaseUrl: string = 'http://localhost:5119/';

  LoginCustomer(LoginAdminRequest: Admin): Observable<Admin>{
    return this.http.post<Admin>(this.BaseUrl+ 'api/Admins/Login', LoginAdminRequest);
  }
}
