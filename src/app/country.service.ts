import { Injectable } from '@angular/core';
import { EnumsService } from './enums.service';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private enums: EnumsService) { }
  getCountry(countryName: string) {
    const countries = this.enums.getCountries();
    const countriesList = countries.filter(country => {
      return country.country.toLowerCase() === countryName.toLowerCase(); });
    if (countriesList.length > 0) {
      return countriesList[0];
    }
  }
  getCountries() {
    return this.enums.getCountries();
  }

}
