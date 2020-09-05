import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from 'src/app/auth.guard';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, CreateComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
