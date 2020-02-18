import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {
  searchForm: FormGroup;
  paymentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      paymentId: ['']
    });
    this.paymentForm = this.fb.group({
      id: {value: 0, disabled: true},
      customer: this.fb.group({
        customerId: null,
        customerName: {value: '', disabled: true },
        customerSurname: {value: '', disabled: true }
      }),
      paymentType: 'Cash',
      paymentDate: {value: null, disabled: true}
    });
  }
  onSubmitSearch(paymentId) {
  }
  updatePayment(payment) {

  }

}
