import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { ListDashboardComponent } from './pages/dashboard/list-dashboard/list-dashboard.component';
import { UserListDashboardComponent } from './pages/dashboard/list-dashboard/user-list-dashboard/user-list-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'user/:id',
        component: UserDashboardComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
