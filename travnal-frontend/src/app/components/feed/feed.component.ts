import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  username: string;
  details;
  following;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    this.login.getUser(this.username).subscribe(data => {
      this.details = data
      this.following = this.details['following']
      console.log(this.following)
    })
  }

}
