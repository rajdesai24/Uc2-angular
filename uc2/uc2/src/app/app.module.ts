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
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[CustomerComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
