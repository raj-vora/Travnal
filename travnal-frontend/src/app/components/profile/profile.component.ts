import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileimage:string="../../../assets/profile-images/janedoe.jpg"
  location:string="Mumbai, India"
  noposts:number=10
  nofollowers:number=2
  nofollowing:number=1

  constructor() { }

  ngOnInit(): void {
  }

}
