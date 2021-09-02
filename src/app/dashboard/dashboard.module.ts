import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
