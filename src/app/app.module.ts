import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './modules/visitor/components/register/register.component';
import { EmployeeService } from './modules/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './modules/home/components/navbar/navbar.component';
import { AdminLoginComponent } from './modules/admin/components/admin-login/admin-login.component';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from './modules/dashboard/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './modules/dashboard/card/card.component';
import { DashComponent } from './modules/dashboard/dash/dash.component';
import { BarChartComponent } from './modules/dashboard/utils/bar-chart/bar-chart.component';
import { LineChartComponent } from './modules/dashboard/utils/line-chart/line-chart.component';
import { PieChartComponent } from './modules/dashboard/utils/pie-chart/pie-chart.component';
import { Chart } from 'chart.js';
import { MiniCardComponent } from './modules/dashboard/card/mini-card/mini-card.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ImageCaptureComponent } from './modules/visitor/components/image-capture/image-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from './modules/home/components/footer/footer.component';
import { VisitorHomeComponent } from './modules/visitor/components/visitor-home/visitor-home.component';
import { OutTimeComponent } from './modules/visitor/components/out-time/out-time.component';
import { GetByEmployeeComponent } from './modules/dashboard/Filter/get-by-employee/get-by-employee.component';
import { CommonModule } from '@angular/common';

import { NgForm } from '@angular/forms';
import { SuccessfulRegisterComponent } from './modules/visitor/components/successful-register/successful-register.component';
import { NgToastModule } from 'ng-angular-popup';
import { DigitsOnlyDirective } from './digits-only.directive';
import { GetByDateComponent } from './modules/dashboard/Filter/getByDate/get-by-date/get-by-date.component';
import { GetByRangeComponent } from './modules/dashboard/Filter/getByRange/get-by-range/get-by-range.component';
import { ChangePasswordComponent } from './modules/dashboard/Filter/changePassword/change-password/change-password.component';
import { AddAdminComponent } from './modules/dashboard/Filter/addAdmin/add-admin/add-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminLoginComponent,
    RegisterComponent,
    NavComponent,
    CardComponent,
    DashComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    MiniCardComponent,
    ImageCaptureComponent,
    FooterComponent,
    VisitorHomeComponent,
    OutTimeComponent,
    GetByEmployeeComponent,
    SuccessfulRegisterComponent,
    DigitsOnlyDirective,
    GetByDateComponent,
    GetByRangeComponent,
    ChangePasswordComponent,
    AddAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    NgChartsModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    WebcamModule,
    MatTabsModule,
    CommonModule,
    NgToastModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
