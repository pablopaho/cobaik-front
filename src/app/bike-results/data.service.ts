import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

    private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        console.log('DataService message 2', message)
        this.messageSource.next(message)
        console.log('DataService currentMessage 3', this.currentMessage)
        console.log('DataService messageSource 4', this.messageSource)
    }
}
