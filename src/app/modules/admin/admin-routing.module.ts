import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dashboard/dash/dash.component';
import { NavComponent } from '../dashboard/nav/nav.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
