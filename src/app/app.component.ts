import { Component, OnInit } from '@angular/core';

import { Bike } from './bike-detail/bike';
import { BikeService} from './bike.service';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BikeService]
})
export class AppComponent implements OnInit {
  title = 'app';
  bikes: Observable<Bike[]>;
  selectedBike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
      this.bikes = this.bikeService.getBikes()
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
