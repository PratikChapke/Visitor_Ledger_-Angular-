import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './modules/admin/components/admin-login/admin-login.component';
import { RegisterComponent } from './modules/visitor/components/register/register.component';
import { NavbarComponent } from './modules/home/components/navbar/navbar.component';
import { DashComponent } from './modules/dashboard/dash/dash.component';
import { NavComponent } from './modules/dashboard/nav/nav.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { VisitorHomeComponent } from './modules/visitor/components/visitor-home/visitor-home.component';
import { GetByEmployeeComponent } from './modules/dashboard/Filter/get-by-employee/get-by-employee.component';
import { OutTimeComponent } from './modules/visitor/components/out-time/out-time.component';
import { SuccessfulRegisterComponent } from './modules/visitor/components/successful-register/successful-register.component';
import { GetByDateComponent } from './modules/dashboard/Filter/getByDate/get-by-date/get-by-date.component';
import { GetByRangeComponent } from './modules/dashboard/Filter/getByRange/get-by-range/get-by-range.component';
import { ChangePasswordComponent } from './modules/dashboard/Filter/changePassword/change-password/change-password.component';
import { AddAdminComponent } from './modules/dashboard/Filter/addAdmin/add-admin/add-admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'nav', component: NavComponent},
  {path: 'visitor', component:VisitorHomeComponent},
  {path: 'getbyemployee', component:GetByEmployeeComponent},
  {path: 'outtime', component:OutTimeComponent},
  {path: 'success', component:SuccessfulRegisterComponent},
  {path:'getbydate', component : GetByDateComponent},
  {path : 'getbyrange', component : GetByRangeComponent},
  {path : 'changepassword', component : ChangePasswordComponent},
  {path : 'addadmin', component : AddAdminComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
