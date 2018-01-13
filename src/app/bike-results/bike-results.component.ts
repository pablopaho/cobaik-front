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
  selectedBike: Bike;
  message: string;

  constructor(private bikeService: BikeService,
    private messageService: MessageService) {
    console.log(JSON.stringify(this.messageService.storage));
    if (this.messageService.storage !== undefined) {
      this.message = this.messageService.storage.start_date;
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
