import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

import { Bike } from '../bike-detail/bike';
import { BikeService } from '../bike.service';
import { Observable } from 'rxjs/Observable';
import { MessageService } from "../message.service";
import { CobaikLocation } from "./cobaik-location";



@Component({
  selector: 'app-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
    providers: [BikeService]
})

export class BikeResultsComponent implements OnInit {
  bikes: Observable<Bike[]>;
  cobaik_location: CobaikLocation = new CobaikLocation(0,0,"");

  constructor(private bikeService: BikeService,
              private messageService: MessageService,
              private router: Router) {
    console.log(JSON.stringify(this.messageService.storage));
    if (this.messageService.storage !== undefined) {
      this.cobaik_location.latitude = messageService.storage.latitude;
      this.cobaik_location.longitude = messageService.storage.longitude;
      this.cobaik_location.city_description = messageService.storage.city_description;
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
