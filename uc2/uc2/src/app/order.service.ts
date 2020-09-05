import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http:HttpClient) { }
  order(userdata):Observable<any>{
    
    return this.http.post('http://localhost:8000/order/post',userdata)
  }
}
