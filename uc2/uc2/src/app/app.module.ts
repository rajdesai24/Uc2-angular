import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CustomerService } from './customer.service';
import {HttpClientModule} from '@angular/common/http';
import { ProviderComponent } from './provider/provider.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ChoicefillComponent } from './choicefill/choicefill.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProviderComponent,
    OrderComponent,
    LoginComponent,
    ChoicefillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
