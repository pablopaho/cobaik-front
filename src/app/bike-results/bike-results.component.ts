import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { Bike } from '../bike-detail/bike';
import { BikeService} from '../bike.service';
import { DataService }              from "../bike-results/data.service";

@Component({
  selector: 'app-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
    providers: [BikeService, DataService]
})
export class BikeResultsComponent implements OnInit {

    bikes: Observable<Bike[]>;
    selectedBike: Bike;
    message:string;

    constructor(private bikeService: BikeService, public data: DataService) {
          console.log('BikeResultsComponent constructor');
    }

    ngOnInit(): void {
      //this.bikeService.searchRide();
        //this.bikes = this.bikeService.getBikes();
        this.data.currentMessage.subscribe(message => this.message = message)
        console.log('BikeResultsComponent 1', this.message)
        console.log('BikeResultsComponent 2', this.data.currentMessage)
  }

    OnChanges(): void {
        this.data.currentMessage.subscribe(message => this.message = message)
    }

  onSelect(bike: Bike): void {
      this.selectedBike = bike;
  }
}
