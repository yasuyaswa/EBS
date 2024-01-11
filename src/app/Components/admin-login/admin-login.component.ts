import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin.models';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  LoginAdminRequest: Admin ={
    adminId: 0,
    adminUsername: '',
    adminPassword: ''
  };

  constructor(private adminService: AdminService, private router: Router){}

  ngOnInit(): void {}

  LoginAdmin(){
    this.adminService.LoginCustomer(this.LoginAdminRequest).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login Successful');
        // this.adminService.AdminUsername = this.LoginAdminRequest.adminUsername;
        this.router.navigate(['/Customer']);

      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid Credentials');
      }
    });
  }
}
