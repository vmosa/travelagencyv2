import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskPartySectionComponent } from '../tasks/task-party-section/task-party-section.component';
import { TaskPlaceSectionComponent } from '../tasks/task-place-section/task-place-section.component';
import { TaskTransportSectionComponent } from '../tasks/task-transport-section/task-transport-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DestinationComponent } from './destination/destination.component';



@NgModule({
  declarations: [
    TasksComponent,
    TaskPartySectionComponent,
    TaskPlaceSectionComponent,
    TaskTransportSectionComponent,
    DestinationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TasksComponent],
  entryComponents: [TasksComponent]
})
export class TasksModule { }
