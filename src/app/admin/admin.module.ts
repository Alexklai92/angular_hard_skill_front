import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from 'src/app/auth.guard';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { SearchPipe } from 'src/app/search.pipe';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreateComponent,
    DashboardComponent,
    FilterPipe,
    SearchPipe,
    EditComponent
  ],
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
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'skill/:id/edit', component: EditComponent, canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  exports: [RouterModule, FilterPipe, SearchPipe]
})
export class AdminModule { }
