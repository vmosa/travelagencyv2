import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskPartySectionComponent } from '../tasks/task-party-section/task-party-section.component';
import { TaskPlaceSectionComponent } from '../tasks/task-place-section/task-place-section.component';
import { TaskTransportSectionComponent } from '../tasks/task-transport-section/task-transport-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DestinationComponent } from './destination/destination.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskmainComponent } from './taskmain/taskmain.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TasksComponent,
    TaskPartySectionComponent,
    TaskPlaceSectionComponent,
    TaskTransportSectionComponent,
    DestinationComponent,
    TasklistComponent,
    TaskmainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule
  ],
  exports: [TasksComponent],
  entryComponents: [TasksComponent]
})
export class TasksModule { }
