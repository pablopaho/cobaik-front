import { Injectable }      from '@angular/core';
import { Headers, Http }   from '@angular/http';

import { Observable }      from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment }     from 'environments/environment';

import 'rxjs/add/operator/map';

import { Bike }            from './bike-detail/bike';
import { SearchRide }      from './bike-search/search-ride';


@Injectable()
export class BikeService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private bikesUrl          = `${environment.URL_BASE_API}/bikes`;
    private availableBikesUrl = `${environment.URL_BASE_API}/available/bikes`;

    constructor(private http: Http) { }

    getBikes(): Observable<Bike[]> {
        console.log('estoy en el servicio getBikes()');
        return this.http.
            get(this.bikesUrl)
            .map(response => response.json() as Bike[])

    }

    searchRide() {
        console.log('si llego a llamar al servicio');

        this.http.post(this.availableBikesUrl, {
            city_code: 1,
            start_date: '2017-01-01',
            end_date: '2017-01-01'
        }).subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log("Error occured");
                }
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
