import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { environment } from 'environments/environment';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private contactUrl = `${environment.URL_BASE_API}/contact`;

  constructor(private http: Http) { }

  createContact(contact: Contact): Promise<any> {
    return this.http.
                post(this.contactUrl, JSON.stringify(contact), {headers: this.headers})
               .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
