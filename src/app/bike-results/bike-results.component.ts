import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike-detail/bike';
import { BikeService} from '../bike.service';
import { Observable }        from 'rxjs/Observable';
import {DataService} from "../data.service"

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

    constructor(private bikeService: BikeService, private data: DataService) { }

    ngOnInit(): void {
        this.data.currentMessage.subscribe(message => this.message = message)
        console.log('BikeResultsComponent', this.message)
        //this.bikes = this.bikeService.getBikes();
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
