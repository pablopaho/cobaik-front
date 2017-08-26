import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
  submitted = false;
  contact = new Contact("","",19,"","","");

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.contactService.createContact(this.contact)
      .then(r => {
        console.log(r)
      });
    this.submitted = true; 
  }
}
