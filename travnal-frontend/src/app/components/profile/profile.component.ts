import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileimage:string="../../../assets/profile-images/janedoe.jpg"
  username:string;
  location:string;
  noposts:number;
  nofollowers:number;
  nofollowing:number;
  details: string[];
  show: boolean;

  constructor(private shared: SharedService, private login: LoginService, private router: Router) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    const urlname = this.router.url.split('/')[1];
    if(this.username === urlname) {
      this.show = true
    }
    else {
      this.username = urlname
      this.show = false
    }
    this.login.getUser(this.username).subscribe(data => {
      this.details = data
      this.shared.userDetails = this.details
      this.location = this.details['city'];
      this.noposts = this.details['posts'].length
      this.nofollowers = this.details['followers'].length
      this.nofollowing = this.details['following'].length
    })
  }
}
