import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './Components/Customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './Components/Customers/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './Components/Customers/update-customer/update-customer.component';
import { SearchCustomerComponent } from './Components/Customers/search-customer/search-customer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'Customer', component: CustomerListComponent},
  {path: 'Customer/Add', component: AddCustomerComponent},
  {path: 'Customer/Update/:id', component: UpdateCustomerComponent},
  {path: 'Customer/Search/:id', component: SearchCustomerComponent},
  {path: 'ContactUs', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
