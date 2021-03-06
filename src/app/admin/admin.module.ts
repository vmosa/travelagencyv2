import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminAddDestinationComponent } from './admin-add-destination/admin-add-destination.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminOptionsListComponent } from './admin-options-list/admin-options-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent,
    AdminAddDestinationComponent,
    AdminPaymentsComponent,
    AdminOptionsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
