import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private contactUrl = 'https://cobaik-dev-backend.herokuapp.com/contact';

  constructor(private http: Http) { }

  createContact(contact: Contact): Promise<string> {
    return this.http.
                post(this.contactUrl, JSON.stringify(contact), {headers: this.headers})
               .toPromise()
               .then(res => res)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
