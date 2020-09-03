import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  total;
  constructor(private http:HttpClient) {}
  
  register(userdata):Observable<any>{
    
    return this.http.post('http://localhost:8000/post/customer',userdata)
  }
 
}
