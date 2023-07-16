import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ChartConfiguration, ChartOptions, ChartType, Color,ChartDataset } from 'chart.js';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {



  public lineChartData: any;
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  public lineChartLegend = true;
  public lineChartPlugins = [];


  constructor(private dashboardService: DashboardService){}

  ngOnInit() {
    this.dashboardService.getEmployeesCountBeingVisited().subscribe(
      (count: any) => { 
            this.lineChartData = [ {
                 data: [count.seven.employeeCount, count.six.employeeCount,count.five.employeeCount, count.four.employeeCount, count.three.employeeCount, count.two.employeeCount,count.one.employeeCount],label: 'No. of Employees being visited'
                //  count.six.employeeCount, count.seven.employeeCount
               } ];
               
                this.lineChartLabels = [count.seven.date, count.six.date, count.five.date, count.four.date, count.three.date, count.two.date,count.one.date]
                // , count.six.date, count.seven.date
              //  }]
            },
             (error) => { 
              console.error('Error fetching visitors count:', error); 
            });
  
   
  }
}
