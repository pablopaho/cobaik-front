import { Component, OnInit } from '@angular/core';

import { Bike } from './bike';
import { BikeService } from '../bike.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'bkd-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css'],
  providers: [BikeService]
})
export class BikeDetailComponent implements OnInit {
  current_bike: Observable<Bike>;

  constructor(private bikeService: BikeService) { }

  ngOnInit():void {
    this.current_bike = this.bikeService.getAvailableBike(1);
  }
}
