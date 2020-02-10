import { Injectable } from '@angular/core';
import { EnumsService } from './enums.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private enums: EnumsService) { }
  getCustomers() {
    return this.enums.getCustomers();
  }
  getSingleCustomer(id: number) {
    const lsc = this.getCustomers().filter(c => c.id === id);
    let sc = lsc.length > 0 ? lsc[0] : {addressId: 0};
    const laddr = this.enums.getAddresses().filter( a => a.id === sc.addressId);
    sc['address'] = laddr.length > 0 ? laddr[0] : {};
  }
}
