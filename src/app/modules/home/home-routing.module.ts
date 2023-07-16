import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from '../admin/components/admin-login/admin-login.component';
import { RegisterComponent } from '../visitor/components/register/register.component';


const routes: Routes = [
  // { path: 'admin', component: AdminLoginComponent },
  // { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
