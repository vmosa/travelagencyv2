import { Injectable } from '@angular/core';
import { Address, Country, Customer, Destination, Payment } from './helperclasses/helperclasses.module';

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
private listOfPayments = [
  new Payment(1, 1, 'Cash', new Date('2019-03-25'), 50.5),
  new Payment(2, 1, 'CreditCard', new Date('2019-04-01'), 1500),
  new Payment(3, 2, 'DebitCard', new Date('2020-01-20'), 0)
  ];

private listOfCustomers = [
  {
    id: 1, name: 'John', surname: 'Doe', addressId: 1, dateOfBirth: new Date('2006-03-08')
  }, {
    id: 2, name: 'Jane', surname: 'Doe', addressId: 2, dateOfBirth: new Date('1966-03-08')
  }
];
private listOfAddresses = [{
  id: 1, streetName: 'Hellheim St.', streetNumber: 666, city: 'Athens', pobox: '16268', country: 'Greece'
},
{
  id: 2, streetName: 'Route 66', streetNumber: 1, city: 'Dallas', pobox: '38A29', country: 'USA'
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
  addPayment(payment: Payment) {
    const ind = this.listOfPayments.findIndex((lop: Payment) => {
      return lop.id === payment.id;
    });
    if ( ind > -1 ) {
      throw new Error('Payment with id' + payment.id.toString() + 'already exists');
    } else {
      this.listOfPayments.push(payment);
    }

  }
  updatePayment(id: number, payment: Payment) {
    const ind = this.listOfPayments.findIndex((lop: Payment) => {
      return lop.id === payment.id;
    });
    this.listOfPayments[ind] = payment;
  }

}

