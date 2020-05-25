import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!currentUser.username){
      this.router.navigate(['/login'])
    }
  }
}
