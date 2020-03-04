import { Component, OnInit } from '@angular/core';
import { TaskPartySectionComponent } from '../task-party-section/task-party-section.component';
import { TaskPlaceSectionComponent } from '../task-place-section/task-place-section.component';
import { TaskTransportSectionComponent } from '../task-transport-section/task-transport-section.component';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-taskmain',
  templateUrl: './taskmain.component.html',
  styleUrls: ['./taskmain.component.css']
})
export class TaskmainComponent implements OnInit {
  taskName;
  data;
  constructor(private http: HttpClient) { 
    const endposition = location.href.lastIndexOf('/');
    this.http.get('http://localhost:3000/tasks/' + location.href.substring(endposition + 1))
    .subscribe(data => {
      // console.log(data);
      this.data = data;
    });
  }

  ngOnInit() {
  }

}
