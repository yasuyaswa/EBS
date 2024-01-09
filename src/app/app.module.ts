import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './Components/Customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './Components/Customers/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './Components/Customers/update-customer/update-customer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchCustomerComponent } from './Components/Customers/search-customer/search-customer.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AddBillComponent } from './Components/Bills/add-bill/add-bill.component';
import { BillListComponent } from './Components/Bills/bill-list/bill-list.component';
import { UpdateBillComponent } from './Components/Bills/update-bill/update-bill.component';
import { CustomerLoginComponent } from './Components/Customers/customer-login/customer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    SearchCustomerComponent,
    FooterComponent,
    ContactUsComponent,
    AddBillComponent,
    BillListComponent,
    UpdateBillComponent,
    CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    //AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
