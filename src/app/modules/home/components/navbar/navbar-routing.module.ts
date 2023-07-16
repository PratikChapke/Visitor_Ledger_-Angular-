import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from 'src/app/modules/admin/components/admin-login/admin-login.component';
import { RegisterComponent } from 'src/app/modules/visitor/components/register/register.component';


const routes: Routes = [
  { path: 'adm', component: AdminLoginComponent },
  { path: '/register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AdminLoginComponent,
    RegisterComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

  
})
export class NavbarRoutingModule { }
