import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

// import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeService } from './bike.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeDetailComponent
  ],
  imports: [
    BrowserModule, 
    // AlertModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
