import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  constructor(private http:HttpClient){}
  onSubmit(formData : any){
     this.http.post('http://localhost:8050/admin/save',{
      "userName" : formData.value.username,
      "password" : formData.value.password,
      "name" : formData.value.name,
      "email" : formData.value.email
      }).subscribe(data => console.log(data));
  }

}
