import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact = new Contact("","",19,"","","");
  submitted = false;
  busy: Promise<any>;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.busy = this.contactService.createContact(this.contact).then(result => {
      if(result) {
        this.submitted = true; 
       } else {
         this.submitted = false;
       }
    });
  }
}
