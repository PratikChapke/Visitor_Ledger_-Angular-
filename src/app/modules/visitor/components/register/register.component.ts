import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/employee.service';
import { Employee } from 'src/app/modules/employee/models/employee';
import {RegisterService} from 'src/app/modules/visitor/services/register.service'
import { SharedService } from '../../services/shared.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formData: any = {}; // Object to store form data
  employees: Employee[] = [];
  isOfficial : boolean = true;
  // onSubmit() {
  //   // Handle form submission here
  //   console.log('Form Data:', this.formData);
  //   // You can implement your logic to submit the data to the server or perform any other actions.
  // }

  constructor(private employeeService: EmployeeService, private registerService: RegisterService,private sharedService: SharedService, private router:Router) {}
  imgData : any;
  ngOnInit(): void {
    this.getEmployees();
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

  onSubmit(formData:any) {
    this.imgData = this.sharedService.getImgData();
    formData.value.imgPath = this.imgData;
    // console.log("in on submit");
    // console.log(formData.value.imgData );
    this.registerService.onFormSubmit(formData.value).subscribe(
      data => {
        // console.log("Data saved successfully!", data);
        // You can perform any additional actions or show success messages here
        this.router.navigate(['/success'])
      },
      error => {
        console.error("Error saving data:", error);
        // You can handle errors and show appropriate messages to the user
      }
    );
    formData.resetForm();
  }

  captureMyImage: boolean = false;
 
  captureImage() {
    this.captureMyImage = true;
  }

  onChange(event : any){
    console.log((<HTMLInputElement>event.target).value);
    if((<HTMLInputElement>event.target).value === 'personal') this.isOfficial = false;
  }
}
