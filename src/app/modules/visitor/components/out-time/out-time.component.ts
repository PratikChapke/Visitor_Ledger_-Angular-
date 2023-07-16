import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-out-time',
  templateUrl: './out-time.component.html',
  styleUrls: ['./out-time.component.css']
})
export class OutTimeComponent {


  form: FormGroup;
  error: string | null;
  uid : number;
  constructor( private outTimeService : SharedService, private toast: NgToastService ) {
    // private formBuilder: FormBuilder ,
    // this.form = this.formBuilder.group({
    //   number: ['', [Validators.required,Validators.pattern(/^\d{6}$/)]]
    // });
    // this.error = null;
  }
 
  ngOnInit(): void {
 
  }
 
  submit(formData:any): void {
    // if (this.form.valid) {
    //   const uid = formData.value.number;
 
    //   console.log(typeof uid);
 
    //    this.outTimeService.updateOutTime(uid) ;
    // }

    // this.toast.success({detail:"Success", summary:"Visit Again!", duration:7000});
    alert("Thank You! Visit Again!")
    console.log(formData.value.number);
    this.outTimeService.updateOutTime(formData.value.number);
    formData.resetForm();
  }


}
