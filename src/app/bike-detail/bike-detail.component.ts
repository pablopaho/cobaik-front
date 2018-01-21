import { Component, Input } from '@angular/core';

import { Bike } from './bike';
@Component({
  selector: 'bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent {
  @Input() bike: Bike;

  constructor() { }

  ngOnInit() {
   }
}
