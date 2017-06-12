import { Component, OnInit } from '@angular/core';

import { Bike } from './bike-detail/bike';
import { BikeService} from './bike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BikeService]
})
export class AppComponent implements OnInit {
  title = 'app';
  bikes: Bike[];
  selectedBike: Bike;

  constructor(private bikeService: BikeService) { }

  getBikes(): void {
    this.bikeService.getBikes().then(bikes => this.bikes = bikes);
  }    

  ngOnInit(): void {
    this.getBikes();
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
