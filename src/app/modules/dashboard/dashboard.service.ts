import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/models/employee';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {



  constructor(private http: HttpClient) {}


   Getchartinfo(){
    return this.http.get("http://localhost:8050/admin/count");
  }

  getData(){
    return this.http.get("http://localhost:8050/admin/dashboard/date");
  }

  getEmployeesCountBeingVisited(){
    return this.http.get("http://localhost:8050/admin/dashboard/employee");
  }


  // private apiUrl = 'http://localhost:8050/visitor/employees'; // Replace with your Spring Boot API URL

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8050/visitor/employees');
  }

  getTotalVisitor() {
    return this.http.get("http://localhost:8050/admin/visitor/count");
  }
}
