import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './Components/Customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './Components/Customers/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './Components/Customers/update-customer/update-customer.component';
import { SearchCustomerComponent } from './Components/Customers/search-customer/search-customer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BillListComponent } from './Components/Bills/bill-list/bill-list.component';
import { AddBillComponent } from './Components/Bills/add-bill/add-bill.component';
import { UpdateBillComponent } from './Components/Bills/update-bill/update-bill.component';
import { CustomerLoginComponent } from './Components/Customers/customer-login/customer-login.component';
import { PaymentListComponent } from './Components/Payments/payment-list/payment-list.component';
import { AddPaymentComponent } from './Components/Payments/add-payment/add-payment.component';
import { UpdatePaymentComponent } from './Components/Payments/update-payment/update-payment.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'Customer', component: CustomerListComponent},
  {path: 'Customer/Add', component: AddCustomerComponent},
  {path: 'Customer/Update/:id', component: UpdateCustomerComponent},
  {path: 'Customer/Search/:id', component: SearchCustomerComponent},
  {path: 'Customer/Login', component: CustomerLoginComponent},

  {path: 'ContactUs', component: ContactUsComponent},

  {path: 'Bill', component: BillListComponent},
  {path: 'Bill/Add', component: AddBillComponent},
  {path: 'Bill/Update/:id', component: UpdateBillComponent},

  {path: 'Payment', component: PaymentListComponent},
  {path: 'Payment/Add', component: AddPaymentComponent},
  {path: 'Payment/Update/:id', component: UpdatePaymentComponent},

  {path: 'Admin/Login', component: AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
