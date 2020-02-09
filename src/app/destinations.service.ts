import { Injectable } from '@angular/core';
import { EnumsService } from './enums.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private enums: EnumsService) { }
  addDestination(d) {
    this.enums.addDestination(d);
  }
  getDestinations() {
    return this.enums.getDestinations();

  }
}
