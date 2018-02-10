import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Bike } from './bike';
import { BikeService } from '.././bikes/bike.service';
import { BikeIdentificationService } from ".././bike-detail/shared/bike-identification.service"


@Component({
  selector: 'bkd-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css'],
  providers: [BikeService]
})

export class BikeDetailComponent implements OnInit {
  current_bike: Observable<Bike>;

    constructor(private bikeService: BikeService,
                private bikeIdentificationService: BikeIdentificationService
               ) {
    }

    ngOnInit():void {
        this.current_bike = this.bikeService.getAvailableBike(this.bikeIdentificationService.bikeId);
    }
}
