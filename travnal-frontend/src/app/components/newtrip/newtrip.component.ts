import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {
  name:string = "Raj"
  constructor() { }

  ngOnInit(): void {
  }

}
