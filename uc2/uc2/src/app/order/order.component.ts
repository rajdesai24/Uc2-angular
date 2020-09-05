import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[OrderService]
})
export class OrderComponent implements OnInit {
  order;
  constructor(private orderservice:OrderService) {}

  ngOnInit(): void {
    this.order={
      customerid:'',
      choice:'',

    }

  }
  orderit(){
    
    this.orderservice.order(this.order).subscribe(
      response=>{
        alert('order placed')
      },
      
      error=>console.log('error',error)
      
    );

  }

}
