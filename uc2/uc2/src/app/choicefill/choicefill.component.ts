import { Component, OnInit } from '@angular/core';
import {ChoiceService} from '../choice.service'
import {Router} from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-choicefill',
  templateUrl: './choicefill.component.html',
  styleUrls: ['./choicefill.component.css']
})
export class ChoicefillComponent implements OnInit {
  services;
 constructor(private choiceservice:ChoiceService,private router:Router) { }

  ngOnInit(): void {
    this.services={
      user:'',
      choice:''
    };
  }
  
 selectchoice(){
   this.choiceservice.fill(this.services).subscribe(
    response=>{
      alert('choice selected')
    },
    
    error=>console.log('error',error)
    
  );
 }
}
