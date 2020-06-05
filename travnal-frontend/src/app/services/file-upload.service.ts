import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient.post('/api/upload', formData, httpOptions);
}
}
