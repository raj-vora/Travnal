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

  login(value) {
    this.loginService.login(value)
      .subscribe(
        data => {
          this.sharedService.username = data.username;
          this.router.navigate(['/profile']);
        },
        error => console.log(error)
      );
  }

  signup(value) {
    this.loginService.signUp(value)
      .subscribe(
        data => {
          this.sharedService.username = data.username;
          this.router.navigate(['/create']);
        },
        error => console.log(error)
      );
  }
}