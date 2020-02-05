import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private taskNames = ['first Contact',
  'telephone Contact',
  'ticket Creation',
  'ticket Payment'
];
public taskName;
  constructor() {
    this.taskName = this.taskNames[0];
   }
   public disablePlaceSection() {
     return this.taskName !== 'ticket Creation';

   }
   public disableTransportSection() {
    return this.taskName !== 'ticket Creation';
  }
  public disablePartySection() {
    return this.taskName === 'ticket Creation';
  }
  ngOnInit() {
  }

}
