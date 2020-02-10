import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-party-section',
  templateUrl: './task-party-section.component.html',
  styleUrls: ['./task-party-section.component.css']
})
export class TaskPartySectionComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: '',
      surname: '',
      idDocumentForm: this.fb.group({
        idDocumentType: '',
        idDocumentNumber: ''
      }),
      addressForm: this.fb.group({
        addressStreetName: '',
        addressStreetNumber: '',
        addressPOBox: '',
        addressCity: '',
        addressCountry: '',
        addressType: ''
      })

    });
  }

}
