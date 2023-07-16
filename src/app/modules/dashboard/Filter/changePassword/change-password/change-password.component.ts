import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
constructor(private http:HttpClient){}
async onSubmit(formData : any){
  console.log(formData.value);
  await this.http.put(`http://localhost:8050/admin/change/${formData.value.user}/${formData.value.curr}/${formData.value.new}/${formData.value.confirm}`,{}).subscribe(data => console.log(data));
}
}
