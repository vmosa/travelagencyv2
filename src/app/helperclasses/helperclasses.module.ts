import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Payment } from './payment';
import { Customer } from './customer';
import { Country } from './country';
import { Address } from './address';
import { Destination } from './destination';



@NgModule({
  declarations: [ Payment,
  Country,
  Customer,
  Address,
  Destination
],
  imports: [
    CommonModule
  ]
})
export class HelperclassesModule {}
export {Payment} from './payment';
export { Customer } from './customer';
export { Country } from './country';
export { Address } from './address';
export { Destination } from './destination';
