import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized, ROUTES } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [{
  path: 'admin', component: AdminComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'tasks', component: TasksComponent,
  canLoad: [AuthguardGuard],
  canActivate: [AuthguardGuard],
  runGuardsAndResolvers: 'always'

},
{path: '', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
