import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule } from '@agm/core';

import { environment } from 'environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { BikeService } from './bike.service';
//import { MessageService } from './message.service';
import { LocationService } from "./bike-results/shared/location.service";
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BikeResultsComponent } from './bike-results/bike-results.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TermsAndConditionsComponent,
    MenuComponent,
    FooterComponent,
    BikeResultsComponent,
    BikeDetailComponent,
    BikeSearchComponent
  ],
  imports: [AgmCoreModule.forRoot({
      apiKey: `${environment.GOOGLE_PLACES_API_KEY}`,
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PageScrollModule,
    BrowserAnimationsModule,
    BusyModule,
    AppRoutingModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
