import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  details;
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.details={
      username:'',
      password:''
    };

  }
  Loginuser(){
    this.login.login(this.details).subscribe(
      
      response=>{
        console.log(response);

        alert('User '+this.details.username+' is logged')
      },
      
      error=>console.log('error',error)
      
    );

  }

}
