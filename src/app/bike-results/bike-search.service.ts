import { Injectable } from '@angular/core';

@Injectable()
export class BikeSearchService {

    public city:      string;
    public startDate: Date;
    public endDate:   Date;

    public constructor(city:      string,
                       startDate: Date,
                       endDate:   Date) { }
}
