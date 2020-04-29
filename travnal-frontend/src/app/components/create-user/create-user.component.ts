import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  username:string = "rajvora"
  constructor() { }

  ngOnInit(): void {
  }

  create(value) {
    console.log(value)
  }

  backAway(){
    //if it was the first page
    if(history.length === 1){
       // window.location = "http://www.mysite.com/"
    } else {
        history.back();
    }
  }
}
