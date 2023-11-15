import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs/Observable";

@Injectable({providedIn: 'root'})

export class ServiceNameService {
  constructor(private http:HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
}
