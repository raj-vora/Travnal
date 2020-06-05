import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  title: string;
  username: string;
  tripid: number;
  userlink: string;
  urlname: string;
  show: boolean;
  places: string[];

  constructor(private router: Router, private loginService: LoginService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    const url = this.router.url.split('/');
    this.urlname = url[1];
    this.tripid = Number(url[2]);
    if(this.username === this.urlname) {
      this.show = true
    }
    else {
      this.username = this.urlname
      this.show = false
    }
    
    this.loginService.getTrip({"username":this.urlname, "id":this.tripid}).subscribe(data => {
      this.title = data.trip.tripname
      this.userlink = `${this.urlname}/profile`
      this.places = data.trip.places
    })
  }

  openform() {
    document.getElementById('addplace').style.display='block'
  }

  close() {
    document.getElementById('addplace').style.display='none'
  }

  addPlace(values) {
    values['username'] = this.urlname;
    values['id'] = this.tripid;
    this.loginService.create(values, 'create/place').subscribe(
      data => console.log(data),
      error => console.error(error)
    )
    this.places.push(values)
    this.close()
  }
}
