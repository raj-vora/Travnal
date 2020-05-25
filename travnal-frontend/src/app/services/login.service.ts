import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl = 'http://localhost:8001/api/';
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  constructor(private http: HttpClient) { }

  signUp(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'users', values, httpOptions);
  }

  login(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'login', values, httpOptions);
  }

  create(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'create', values, httpOptions)
  }

  createTrip(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'create/trip', values, httpOptions)
  }

  createPlace(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'create/place', values, httpOptions);
  }

  getUser(username:string): Observable<any> {
    return this.http.get(this.baseUrl+'getdata/'+username, httpOptions)
  }

  getTrip(values: { username: string; id: number; }): Observable<any> {
    return this.http.post(this.baseUrl+'getdata/tripinfo', values, httpOptions)
  }
}
