import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/tasks', {
    })
    .subscribe((data) => {
      this.tasks = data;
    });
    // console.log(this.tasks);
  }
  tasks;
  ngOnInit() {
  }

}
