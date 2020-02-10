import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {
 private listOfCountries = [{id: 0, country: '', continent: ''},
  {id: 1, country: 'Greece', code: 'GRE', continent: 'Europe'},
  {id: 2, country: 'Italy', code: 'ITA', continent: 'Europe'}
];
private listOfDestinations = [
  {
  id: 1, city: 'Athens', country: {country: 'Greece', code: 'GRE', continent: 'Europe'}
}, { id: 2, city: 'Rome', country: {country: 'Italy', code: 'ITA', continent: 'Europe'}
  }
];
private listOfPayments = [{
  id: 1, customerId: 1, paymentType: 'Cash', paymentDate: new Date('2019-03-25')
}, {
  id: 2, customerId: 1, paymentType: 'CreditCard', paymentDate: new Date('2019-04-01')
}, {
  id: 3, customerId: 2, paymentType: 'DebitCard', paymentDate: new Date('2020-01-20')
}];

private listOfCustomers = [
  {
    id: 1, name: 'John', surname: 'Doe', addressId: 1
  }, {
    id: 2, name: 'Jane', surname: 'Doe', addressId: 2
  }
];
private listOfAddresses = [{
  id: 1, streetName: 'Hellheim St.', streetNumber: 666, city: 'Athens', country: 'Greece'
},
{
  id: 2, streetName: 'Route 66', streetNumber: 1, city: 'Dallas', country: 'USA'
}];

  constructor() { }
  getCountries() {
    return this.listOfCountries;
  }
  addCountry(c) {
    if ((this.listOfCountries.filter(country => c.country === country.country).length === 0)) {
      this.listOfCountries.push(c);
    } else {
      console.error(c.country + ' already exists!');
    }
  }
  getDestinations() {
    return this.listOfDestinations;
  }
  addDestination(d) {
    if ((this.listOfDestinations.filter(destination => d.city.toLowerCase() === destination.city.toLowerCase()).length === 0)) {
      this.listOfDestinations.push(d);
    } else {
      console.error(d.city + ' already exists!');
    }
  }
  getPayments() {
    return this.listOfPayments;
  }
  getCustomers() {
    return this.listOfCustomers;
  }
  getAddresses() {
    return this.listOfAddresses;
  }
  addPayment() {

  }
  updatePayment(id: number, customerId: number, paymentType: string) {
    const flp = this.listOfPayments.filter(p => p.id === id);
  }

}

