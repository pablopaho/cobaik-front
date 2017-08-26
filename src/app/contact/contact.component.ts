import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact = new Contact("","",19,"","","");
  submitted = false;

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
