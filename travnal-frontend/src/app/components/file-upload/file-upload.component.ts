import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  imagePath;
  imgURL: string | ArrayBuffer;
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
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
      },
      error => console.log(error)
    );
  }
}