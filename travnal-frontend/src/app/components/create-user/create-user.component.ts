import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  username:string;
  uploaded: string;
  fileToUpload: File = null;
  imagePath: FileList;
  imgURL: string | ArrayBuffer;

  constructor(private loginService: LoginService, private router: Router, private fileUploadService: FileUploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

  upload() {
    this.fileUploadService.postFile(this.fileToUpload)
    .subscribe(
      data => {
        this.imagePath = data.profile
        console.log(this.imagePath)
        this.uploaded="Successfully uploaded Image"
      },
      error => console.log(error)
    );
  }

  create(values: string[]) {
    this.loginService.create(values, 'create')
      .subscribe(data => {
        this.loginService.loggedIn.next(true);
        
        this.router.navigate([`${data.username}/profile`])
      })
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