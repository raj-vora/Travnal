import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  baseUrl = 'http://localhost:8001/api/';
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  constructor(private http: HttpClient) { }

  login(values: Object): Observable<any> {
    return this.http.post(this.baseUrl+'login', values, httpOptions)
  }

  create(values: Object, link:string): Observable<any> {
    return this.http.post(this.baseUrl+link, values, httpOptions)
  }

  getUser(username:string): Observable<any> {
    return this.http.get(this.baseUrl+'getdata/'+username, httpOptions)
  }

  getTrip(values: Object): Observable<any> {
    return this.http.post(this.baseUrl+'getdata/tripinfo', values, httpOptions)
  }
}
