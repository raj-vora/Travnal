import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  login(values) {
    this.loginService.create(values, 'login')
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify({ token: data.token, username: data.username }))
          this.sharedService.username = data.username;
          this.router.navigate([`/${data.username}/profile`]);
        },
        error => console.log(error)
      );
  }

  signup(values) {
    this.loginService.create(values, 'users')
      .subscribe(
        data => {
          this.sharedService.username = data.username;
          this.router.navigate(['/create']);
        },
        error => console.log(error)
      );
  }
}