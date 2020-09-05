import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {CustomerComponent} from  './customer/customer.component'; 
import {ProviderComponent} from './provider/provider.component';
import {LoginComponent} from './login/login.component';
import {ChoicefillComponent} from './choicefill/choicefill.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'order', component:OrderComponent },
  {path:'customersignup',component:CustomerComponent},
  {path:'providersignup',component:ProviderComponent},
  {path:'login',component:LoginComponent},
  {path:'choice',component:ChoicefillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
