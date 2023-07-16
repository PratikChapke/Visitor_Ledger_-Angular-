import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent  {

  sidebarOpened = false;
  visitorCount:number=0;
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  private breakpointObserver = inject(BreakpointObserver);

  personalCount: number;

  constructor(private dashboardService: DashboardService, private router: Router, private http:HttpClient) { }
  // constructor() {}

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          // table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 2, rows: 1 },
        chart: { cols: 2, rows: 2 },
        // table: { cols: 4, rows: 4 },
      };
    })
  );


  // ngOnInit() {
  //   this.dashboardService. Getchartinfo().subscribe(
  //     (count: number) => { 
  //       this.personalCount = count; 
  //       console.log(this.personalCount)
  //     },
  //      (error) => { 
  //       console.error('Error fetching visitors count:', error); 
  //     });
  // }

  // ngOnInit(): void {

  //   this.dashboardService.Getchartinfo().subscribe(
  //     (count: number) => { 
  //             this.personalCount = count; 
  //             console.log(this.personalCount)
  //           },
  //            (error) => { 
  //             console.error('Error fetching visitors count:', error); 
  //           });
  
   
  // }

  chartdata: any;
  // cardTitles: string[] = [ 'Download Excel']
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  RenderChart(labeldata:any,maindata:any,colordata:any) {
    const myChart = new Chart("piechart", {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  handleCardClick(){
    console.log("inside function");
  // (['http://localhost this.router.navigate:8050/admin/excel']);
  this.router.navigateByUrl('http://localhost:8050/admin/excel')
  console.log("out");
   
  }

  ngOnInit(): void{
    this.dashboardService.getTotalVisitor().subscribe(
      (count: any) => { 
            this.visitorCount = count;
            },
             (error) => { 
              console.error('Error fetching visitors count:', error); 
            });
  
   
  }

  onClick() {
    this.router.navigate(['/getbyemployee']);
  }
  onRangeClick(){
    // console.log("in range router");
    this.router.navigate(['/getbyrange']);
  }
  onDateClick(){
    this.router.navigate(['/getbydate']);
  }

  onChangePassword(){
    this.router.navigate(['/changepassword']);
  }
  onAddAdmin(){
    this.router.navigate(['/addadmin']);
  }

}
