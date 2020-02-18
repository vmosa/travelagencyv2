import { Component, OnInit } from '@angular/core';
import { TaskPartySectionComponent } from '../task-party-section/task-party-section.component';
import { TaskPlaceSectionComponent } from '../task-place-section/task-place-section.component';
import { TaskTransportSectionComponent } from '../task-transport-section/task-transport-section.component';



@Component({
  selector: 'app-taskmain',
  templateUrl: './taskmain.component.html',
  styleUrls: ['./taskmain.component.css']
})
export class TaskmainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
