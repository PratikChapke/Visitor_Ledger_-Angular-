import { Component } from '@angular/core';
import { Visitor } from '../../../models/visitor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-by-date',
  templateUrl: './get-by-date.component.html',
  styleUrls: ['./get-by-date.component.css']
})
export class GetByDateComponent {
  date : any;
  visitors : Visitor[] = [];
  constructor(private http: HttpClient){}
  onChange(event : any){
    // console.log("inside on select");
    // this.date = 
    this.date = (<HTMLInputElement>event.target).value;
    this.http.get<any>(`http://localhost:8050/admin/visitors/date/${this.date}`).subscribe(
       data => this.visitors = data
    );
   }
}
