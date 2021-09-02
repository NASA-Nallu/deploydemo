import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './guards/auth.guard';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path: '', loadChildren: () => UserModule},
  {path: 'users', loadChildren: () => UserModule},
  {path: 'home', loadChildren: () => DashboardModule, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
