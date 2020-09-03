import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) {}
  register(userdata):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/',userdata)
  }
}
