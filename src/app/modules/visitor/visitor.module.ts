import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { OutTimeComponent } from './components/out-time/out-time.component';
import { ImageCaptureComponent } from './components/image-capture/image-capture.component';
import { VisitorHomeComponent } from './components/visitor-home/visitor-home.component';
import { FooterComponent } from '../home/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { WebcamModule } from 'ngx-webcam';


import { NgForm } from '@angular/forms';
import { SuccessfulRegisterComponent } from './components/successful-register/successful-register.component';
@NgModule({
  declarations: [
    RegisterComponent,
    OutTimeComponent,
    ImageCaptureComponent,
    VisitorHomeComponent,
    FooterComponent,
    SuccessfulRegisterComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
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
    NgForm
  ]
})
export class VisitorModule { }
