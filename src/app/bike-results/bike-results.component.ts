import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike-detail/bike';
import { BikeService} from '../bike.service';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
  providers: [BikeService]
})
export class BikeResultsComponent implements OnInit {
  bikes: Observable<Bike[]>;
    selectedBike: Bike;

    constructor(private bikeService: BikeService) {
          console.log('this.bikesakjsdhakdjs');
    }

  ngOnInit(): void {
      this.bikes = this.bikeService.getBikes();
      this.bikes.subscribe(b => console.log('BBBBBBB', b));

      console.log('this.bikes si es esta', this.bikes);
  }

  onSelect(bike: Bike): void {
      this.selectedBike = bike;
  }
}
