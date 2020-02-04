import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminAddDestinationComponent } from './admin-add-destination/admin-add-destination.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';


const adminRoutes = [
{path: 'addDestination', component: AdminAddDestinationComponent},
{path: 'payment', component: AdminPaymentsComponent},
];

@NgModule({
imports: [RouterModule.forRoot(adminRoutes)],
exports: [RouterModule]

})
export class AdminRoutingModule { }
