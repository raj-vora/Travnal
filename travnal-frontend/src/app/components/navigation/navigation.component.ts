import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  profileimage:string="../../../assets/"
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private loginService: LoginService) {
  }
  
  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    if(this.username){
      this.loginService.loggedIn.next(true);
      this.isLoggedIn$ = this.loginService.isLoggedIn;
    }
    this.loginService.getUser(this.username).subscribe(data => {
      this.profileimage = this.profileimage+data['profile']
    })
  }

  search(value) {
    this.loginService.search(value['search']).subscribe(data => {
      this.loginService.sharedData = data
      this.router.navigate(['/search'])
    })
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.loginService.loggedIn.next(false)
    this.router.navigate(['/login'])
  }
}
