import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeDetailComponent
  ],
  imports: [
    BrowserModule, 
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
