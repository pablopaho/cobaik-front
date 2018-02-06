import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

import { Bike } from '../bike-detail/bike';
import { BikeService } from '.././bikes/bike.service';
import { Observable } from 'rxjs/Observable';
import { LocationService } from "./shared/location.service";
import { CobaikLocation } from "./shared/cobaik-location";



@Component({
  selector: 'bkr-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
    providers: [BikeService]
})

export class BikeResultsComponent implements OnInit {
  bikes: Observable<Bike[]>;
  cobaik_location: CobaikLocation = new CobaikLocation(0,0,"");

  constructor(private bikeService     : BikeService,
              private locationService : LocationService,
              private router          : Router) {
    
    if (this.locationService.storage !== undefined) {
      this.cobaik_location.latitude = locationService.storage.latitude;
      this.cobaik_location.longitude = locationService.storage.longitude;
      this.cobaik_location.city_description = locationService.storage.city_description;
    }
  }

  ngOnInit(): void {
    this.bikes = this.bikeService.getAvailableBikes(this.cobaik_location);
  }

  goToDetailBike(){
    this.router.navigate(["bicicleta-detalle"]);
  }

  getMakers(locations: Array<Bike>): Array<CobaikLocation> {
    return locations.map(x => x.cobaik_location);
  }
}
