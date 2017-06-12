import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Bike } from './bike-detail/bike';

@Injectable()
export class BikeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bikesUrl = 'https://cobaik-dev-backend.herokuapp.com/bikes';

  constructor(private http: Http) { }

  getBikes(): Observable<Bike[]> {
    return this.http.
                get(this.bikesUrl)
               .map(response => response.json() as Bike[])
              
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
