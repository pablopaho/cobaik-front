import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike-detail/bike';
import { BikeService } from '../bike.service';
import { Observable } from 'rxjs/Observable';
import { MessageService } from "../message.service"

@Component({
  selector: 'app-bike-results',
  templateUrl: './bike-results.component.html',
  styleUrls: ['./bike-results.component.css'],
    providers: [BikeService]
})

export class BikeResultsComponent implements OnInit {
  bikes: Observable<Bike[]>;
  selectedBike: Bike;
  message: string;
  city_description: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  url: String = "https://cdn3.iconfinder.com/data/icons/transportation-icons-4/100/iconlar-08-24.png";

  constructor(private bikeService: BikeService,
    private messageService: MessageService) {
    console.log(JSON.stringify(this.messageService.storage));
    if (this.messageService.storage !== undefined) {
      this.message = this.messageService.storage.start_date;
      this.city_description = this.messageService.storage.city_description;
    } else {
      this.message = "default";
    }
  }

  ngOnInit(): void {
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }
}
