import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8001/api/';

  constructor(private http: HttpClient) { }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  signUp(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'users', values, httpOptions);
  }

  login(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'login', values, httpOptions);
  }

  create(values: string[]): Observable<any> {
    return this.http.post(this.baseUrl+'create', values, httpOptions)
  }

  getUser(username:string): Observable<any> {
    return this.http.get(this.baseUrl+username, httpOptions)
  }

}
