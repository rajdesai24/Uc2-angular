import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChoiceService {
  constructor(private http:HttpClient) { }
  fill(choice):Observable<any>{
    return this.http.post('http://localhost:8000/post/provider/',choice)
  }
}
