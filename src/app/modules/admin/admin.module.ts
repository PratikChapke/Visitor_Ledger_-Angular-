import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DashComponent } from '../dashboard/dash/dash.component';
import { NavComponent } from '../dashboard/nav/nav.component';




@NgModule({
  declarations: [
    AdminLoginComponent,
    NavComponent,
    DashComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
