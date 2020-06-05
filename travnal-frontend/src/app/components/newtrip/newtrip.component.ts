import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {
  name:string;
  
  constructor(private router: Router, private loginService: LoginService, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    const urlname = this.router.url.split('/')[1];
    this.name = urlname
  }

  submit(values: string[]) {
    values['username'] = this.name
    values['places'] = []
    this.loginService.create(values, 'create/trip').subscribe(data => {
      console.log(data)
    })
  }
}
