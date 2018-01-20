import { Component, OnInit } from '@angular/core';
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
  selectedBike: Bike;
  url: String = "https://cdn1.iconfinder.com/data/icons/colorix-sports/128/cycling-48.png";

  cobaikLocation: CobaikLocation = new CobaikLocation(0,0,"");

  constructor(private bikeService: BikeService,
    private messageService: MessageService) {
    console.log(JSON.stringify(this.messageService.storage));
    if (this.messageService.storage !== undefined) {
      this.cobaikLocation.latitude = messageService.storage.latitude;
      this.cobaikLocation.longitude = messageService.storage.longitude;
      this.cobaikLocation.city_description = messageService.storage.city_description;
    }

  }

  ngOnInit(): void {
    console.log("i am here", this.cobaikLocation);
    this.bikes = this.bikeService.getAvailableBikes(this.cobaikLocation);
    //this.bikes = this.bikeService.getBikes();
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
