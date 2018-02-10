import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

import { Bike } from '../bike-detail/bike';
import { BikeService } from '.././bikes/bike.service';
import { Observable } from 'rxjs/Observable';
import { LocationService } from "./shared/location.service";
import { CobaikLocation } from "./shared/cobaik-location";
import { BikeIdentificationService } from ".././bike-detail/shared/bike-identification.service"


@Component({
  selector: 'bkr-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
    providers: [BikeService]
})

export class BikeResultsComponent implements OnInit {
    bikes: Observable<Bike[]>;
    cobaikLocation: CobaikLocation = new CobaikLocation(0,0,"");

    constructor(private bikeService     : BikeService,
                private locationService : LocationService,
                private bikeIdentificationService: BikeIdentificationService,
                private router          : Router) {
        
        if (this.locationService.storage !== undefined) {
            this.cobaikLocation.latitude        = locationService.storage.latitude;
            this.cobaikLocation.longitude       = locationService.storage.longitude;
            this.cobaikLocation.cityDescription = locationService.storage.cityDescription;
        }
    }

    ngOnInit(): void {
        this.bikes = this.bikeService.getAvailableBikes(this.cobaikLocation);
    }

    goToDetailBike(bikeId: number){
      this.bikeIdentificationService.bikeId = bikeId;
      this.router.navigate(["bicicleta-detalle"]);
    }

    getMakers(locations: Array<Bike>): Array<CobaikLocation> {
        return locations.map(x => x.cobaikLocation);
    }
}
