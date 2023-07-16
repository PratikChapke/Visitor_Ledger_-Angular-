import { Component, OnInit } from '@angular/core';
import { Visitor } from '../../models/visitor';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/modules/employee/employee.service';
import { Employee } from 'src/app/modules/employee/models/employee';

@Component({
  selector: 'app-get-by-employee',
  templateUrl: './get-by-employee.component.html',
  styleUrls: ['./get-by-employee.component.css']
})
export class GetByEmployeeComponent implements OnInit {


  visitors : Visitor[] = [];
  employees: Employee[] = [];
 
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Visitor>(this.visitors);
constructor(private http: HttpClient, private employeeService:EmployeeService){}

// private service: GetVisitorsService,
employeeName : string;

 
  ngOnInit(): void{
    this.getEmployees();

}
 onSelect(event : any){
  // console.log("inside on select");
  this.employeeName = (<HTMLInputElement>event.target).value;
  // console.log((<HTMLInputElement>event.target).value);
  this.http.get<any>(`http://localhost:8050/admin/visitors/employee/${this.employeeName}`).subscribe(
    data => this.visitors = data
  );
 }

getEmployees(): void {
  this.employeeService.getAllEmployees().subscribe(
    (employees) => {
      this.employees = employees;
    },
    (error) => {
      console.error('Error fetching employees:', error);
    }
  );
}


}
