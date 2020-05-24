import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { LoginService } from '../../services/login.service';

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

  constructor(private shared: SharedService, private login: LoginService) { }

  ngOnInit(): void {
    this.username = this.shared.username;
    if(this.username) {
      this.login.getUser(this.username).subscribe(data => {
        this.details = data
        this.shared.userDetails = this.details
        console.log(this.shared.userDetails)
        this.location = this.details['city'];
        this.noposts = this.details['posts'].length
        this.nofollowers = this.details['followers'].length
        this.nofollowing = this.details['following'].length
      })
    }
  }

}
