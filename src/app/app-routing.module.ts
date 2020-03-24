import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrbeedDashboardComponent} from './orbeed-dashboard/orbeed-dashboard.component';


const routes: Routes = [
  { path: '', component: OrbeedDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
