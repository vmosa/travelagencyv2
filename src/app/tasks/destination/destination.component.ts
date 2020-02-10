import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinationsService } from 'src/app/destinations.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationForm: FormGroup;
  cities;
  constructor(private fb: FormBuilder, private destService: DestinationsService) { }

  ngOnInit() {
    this.destinationForm = this.fb.group({
      city: '',
      country: {value: '', disabled: true},
      date: '',
      citySearchTerm: ''
    });
    this.updateCountry();
  }
  searchDestinationByCity(c: string) {
    this.cities = this.destService.getDestinations().filter( d => d.city.includes(c));
    console.log(this.cities);
    console.log(c);
    console.log(this.destinationForm.get('city').value);
  }
  updateCountry() {
    this.destinationForm.get('city').valueChanges.subscribe ( (val) => {
    const tempValue = val.city.toLowerCase(); // this.destinationForm.get('city').value.toLowerCase();
    console.log(tempValue);
    const filteredDestinations = this.destService.getDestinations().filter( d => d.city.toLowerCase() === tempValue);
    this.destinationForm.get('country').setValue(filteredDestinations.length > 0 ? filteredDestinations[0].country.country : '');
    console.log(this.destinationForm.get('country').value);
  });
}
}
