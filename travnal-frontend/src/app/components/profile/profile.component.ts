import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileimage:string="../../../assets/"
  username:string;
  urlname: string;
  location:string;
  followers;
  following;
  details: string[];
  show: boolean;
  posts: string[];
  
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    this.urlname = this.router.url.split('/')[1];
    if(this.username === this.urlname) {
      this.show = true
    }
    else {
      this.show = false
    }
    this.login.getUser(this.urlname).subscribe(data => {
      this.details = data
      this.location = this.details['city'];
      this.posts = this.details['posts']
      this.followers = this.details['followers']      
      this.following = this.details['following']
      this.profileimage = this.profileimage+this.details['profile']
    })
  }

  follow() {
    this.login.create({urlname: this.urlname, username: this.username}, 'create/follow').subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
      },
      error => console.log(error)
    )
  }

  open(id: string) {
    console.log(id)
    if(document.getElementById(id).style.display==='block') {
      document.getElementById(id).style.display='none'
    }
    else {
      document.getElementById(id).style.display='block'
    }
  }
}