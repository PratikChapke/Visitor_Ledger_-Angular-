import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CardsComponent } from './cards/cards.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BarChartComponent } from './utils/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './utils/line-chart/line-chart.component';
import { PieChartComponent } from './utils/pie-chart/pie-chart.component';
import { MiniCardComponent } from './card/mini-card/mini-card.component';
import { FilterComponent } from './filter/filter.component';
import { GetByEmployeeComponent } from './Filter/get-by-employee/get-by-employee.component';



@NgModule({
  declarations: [
    // DashboardComponent,
    // CardsComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    MiniCardComponent,
    FilterComponent,
    GetByEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
