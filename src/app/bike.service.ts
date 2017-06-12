import { Injectable } from '@angular/core';

import { Bike } from './bike-detail/bike';
import { BIKES } from './bike-detail/mock-bikes';

@Injectable()
export class BikeService {

  constructor() { }

  getBikes(): Promise<Bike[]> {
    return Promise.resolve(BIKES);
  }
}
