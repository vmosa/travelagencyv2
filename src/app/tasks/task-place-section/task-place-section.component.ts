import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinationsService } from '../../destinations.service';
import { DestinationComponent } from '../destination/destination.component';

@Component({
  selector: 'app-task-place-section',
  templateUrl: './task-place-section.component.html',
  styleUrls: ['./task-place-section.component.css']
})
export class TaskPlaceSectionComponent implements OnInit {
  destinationsForm: FormGroup;
  cities;
  constructor(private destService: DestinationsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.destinationsForm = this.fb.group({
      departureForm: this.fb.group({
      city: '',
      country: {value: '', disabled: true},
      date: '',
      citySearchTerm: ''
    }),
    arrivalForm : this.fb.group({
      city: '',
      country: {value: '', disabled: true},
      date: '',
      citySearchTerm: ''
    }),
    returnTripFlag: {value: '', checked: false}
  });
  }

}
