import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(values) {
    this.loginService.login(values)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify({ token: data.token, username: data.username }))
          this.loginService.loggedIn.next(true);
          this.router.navigate([`/${data.username}/profile`]);
        },
        error => console.log(error)
      );
  }

  signup(values) {
    this.loginService.create(values, 'users')
      .subscribe(
        data => {
          this.router.navigate(['/create', data.username]);
        },
        error => console.log(error)
      );
  }
}