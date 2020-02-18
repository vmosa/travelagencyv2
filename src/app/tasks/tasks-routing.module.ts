import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized, ROUTES } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskmainComponent } from './taskmain/taskmain.component';


const routes: Routes = [{
    path: 'tasks/task/:id', component: TaskmainComponent},
  /*{
    path: 'tasks', component: TasklistComponent,
    canLoad: [AuthguardGuard],
    canActivate: [AuthguardGuard],
    runGuardsAndResolvers: 'always'
  }, */
  {path: 'tasks/list', component: TasklistComponent}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class TasksRoutingModule { }
