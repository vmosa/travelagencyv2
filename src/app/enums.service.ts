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

}

