import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormsModule, Validators, AbstractControl} from '@angular/forms';
import { throwError } from 'rxjs';
import { error } from 'util';
import { ViewFlags } from '@angular/compiler/src/core';
import { CountryService } from '../../country.service';
import { DestinationsService } from '../../destinations.service';

@Component({
  selector: 'app-admin-add-destination',
  templateUrl: './admin-add-destination.component.html',
  styleUrls: ['./admin-add-destination.component.css']
})
export class AdminAddDestinationComponent implements OnInit {
  public countries;
  destinationForm: FormGroup;
  countryForm: FormGroup;
  fb: FormBuilder;
  continent: string;
  checkContinent: boolean;
  getContinent(country: string) {
    const l = this.countries.filter((c) => country === c.country);
    // console.log(l);
    switch (l.length ) {
      case 0: return '';
      case 1: {
        // console.log(l[0].continent);
        return l[0].continent;
      }
      default: throwError(error('Duplicate country of name:' + country));
    }
  }
  constructor( private countryService: CountryService, private destinationService: DestinationsService ) {
    this.fb = new FormBuilder();
    this.countries = this.countryService.getCountries();

  }
  ngOnInit(): void {
    this.countryForm = this.fb.group({
      country: [''],
      continent: [{value: '', disabled: true}]
    });
    this.destinationForm = this.fb.group({
      city: [''],
      countryForm: this.countryForm
    });

    // throw new Error("Method not implemented.");
  }
  onChange() {
    const newValue = this.destinationForm.get('countryForm').get('country').value;
    this.destinationForm.get('countryForm').patchValue({
      country: newValue,
      continent: this.getContinent(newValue)
    });
    this.checkContinent = newValue;
    // console.log(newValue);
  }
  onSubmit() {
    const countryName = this.destinationForm.get('countryForm').get('country').value;
    const countryTemp = this.countryService.getCountry(countryName);
    const dest = {
      city: this.destinationForm.get('city').value,
      country: {country: countryTemp.country, code: countryTemp.code, continent: countryTemp.continent}
    };
    this.destinationService.addDestination(dest);
    // console.log(dest);
  }


}
