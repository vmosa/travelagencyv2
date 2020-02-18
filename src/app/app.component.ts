import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelAgencyV2';
  public urlCheck(): boolean {
    return RouterLink.prototype.routerLink !== './';
  }
  

}
