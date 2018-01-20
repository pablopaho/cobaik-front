import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { environment } from 'environments/environment';

import 'rxjs/add/operator/map';

import { Bike } from './bike-detail/bike';
import { CobaikLocation } from './bike-results/cobaik-location';

@Injectable()
export class BikeService {

  private headers         = new Headers({'Content-Type': 'application/json'});
  private bikes_url       = `${environment.URL_BASE_API}/bikes`;
  private bikes_available = `${environment.URL_BASE_API}/bikes/available`;

  constructor(private http: Http) { }

  getBikes(): Observable<Bike[]> {
    return this.http.
                get(this.bikes_url)
               .map(response => response.json() as Bike[])

  }

  getAvailableBikes(cobaik_location: CobaikLocation): Observable<Bike[]> {
    return this.http.
           post(this.bikes_available, cobaik_location)
           .map(response => response.json() as Bike[]);
  }

  /*addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }*/





  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
