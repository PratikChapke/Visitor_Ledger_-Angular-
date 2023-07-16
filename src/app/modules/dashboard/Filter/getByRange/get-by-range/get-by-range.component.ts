import { Component } from '@angular/core';
import { Visitor } from '../../../models/visitor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-by-range',
  templateUrl: './get-by-range.component.html',
  styleUrls: ['./get-by-range.component.css']
})
export class GetByRangeComponent {
  startDate : any;
  endDate : any;
  visitors : Visitor[] = [];
  constructor(private http: HttpClient){}
  onfirst(event : any){
    this.startDate = (<HTMLInputElement>event.target).value;
  }
  onChange(event : any){
    // console.log("inside on select");
    // this.date = 
     this.endDate = (<HTMLInputElement>event.target).value;
    this.http.get<any>(`http://localhost:8050/admin/visitors/date/${this.startDate}/${this.endDate}`).subscribe(
       data => this.visitors = data
    );
   }
}
