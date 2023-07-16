import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js/dist';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {
// personalCount: number;


 
 // Pie
 public pieChartOptions: ChartOptions<'pie'> = {
  responsive: false,
};

public pieChartDatasets : any;
public pieChartLabels = [ ['Personal'], [ 'Official' ] ];

public pieChartLegend = true;

public pieChartPlugins = [];
constructor(private dashboardService: DashboardService) {}




ngOnInit(): void{
  this.dashboardService.Getchartinfo().subscribe(
    (count: any) => { 
            // this.personalCount = count; 
          //  console.log( this.one = this.personalCount.official)
          // console.log(count);
          this.pieChartDatasets = [ {
               data: [count.personal, count.official ]
             } ];
             
          // this.one = count.personal;
          //   this.two = count.official;
            // console.log(this.one);
            // console.log(this.two);
            // console.log(this.personalCount)
          },
           (error) => { 
            console.error('Error fetching visitors count:', error); 
          });

 
}
}

