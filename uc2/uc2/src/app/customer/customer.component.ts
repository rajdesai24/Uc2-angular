import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {
  register;
  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.register={
      username:'',
      phone_no:''

    };
  }
  registeruser(){
    this.customerservice.register(this.register).subscribe(
      response=>{
        alert('User '+this.register.username+' is created')
      },
      
      error=>console.log('error',error)
      
    );

  }

}
