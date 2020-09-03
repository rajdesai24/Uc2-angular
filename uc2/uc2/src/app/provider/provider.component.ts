import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  register;
  constructor(private providerservice:ProviderService) { }

  ngOnInit(): void {
    this.register={
      username:'',
      password:'',
      first_name:'',
      last_name:'',
      
    };
  }
  registeruser(){
    this.providerservice.register(this.register).subscribe(
      response=>{
        alert('User '+this.register.username+' is created')
      },
      error=>console.log('error',error)
      
    );

  }


}
