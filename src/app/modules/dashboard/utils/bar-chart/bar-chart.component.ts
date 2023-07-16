import { Component } from '@angular/core';
import { ChartOptions, ChartType,ChartDataset } from 'chart.js';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  personalCount: any;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
  public barChartLabels: String[] = ['Day', 'Week', 'Month'];
  public barChartData : any;
  public barChartLegend = true;
  public barChartPlugins = [];
  

    constructor(private dashboardService: DashboardService) {}

  ngOnInit() {

    this.dashboardService.getData().subscribe(
      (count: any) => { 
              this.personalCount = count; 
            this.barChartData = [ {
              data: [count.today, count.thisWeek,count.thisMonth ],label: 'Current',
            },
             {data: [count.yesterday, count.previousWeek,count.previousMonth ], label: 'Previous', }];
            },
             (error) => { 
              console.error('Error fetching visitors count:', error); 
            });

  }
}
