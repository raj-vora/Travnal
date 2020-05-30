import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: any;
  trips: any; 
  image:string="../../../assets/";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.users = this.loginService.sharedData.users;
    this.trips = this.loginService.sharedData.trips;
    console.log(this.trips);
  }

}
