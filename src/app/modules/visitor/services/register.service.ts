import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  formData: any = {};

  constructor(private http:HttpClient) { }


  onFormSubmit(formData:any) {
    // console.log(this.user);
    // You can perform further actions here, such as sending the data to a server
    // for registration or storing it in local storage.

    // let response = this.http.post<any>("http://localhost:8090/visitor/save", {title: 'Visitor POST Request'}).subscribe(data => {
    //   this.user = data.user;
    // })
    return this.http.post<any>("http://localhost:8050/visitor/save", formData)
      
  }
}
