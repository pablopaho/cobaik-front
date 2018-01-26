import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BusyModule } from 'angular2-busy';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

import { BikeService } from './bike.service';
import { MessageService } from './message.service';


import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BikeResultsComponent } from './bike-results/bike-results.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';
import { environment } from 'environments/environment';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terminos-condiciones', component: TermsAndConditionsComponent },
  { path: 'bicicletas', component: BikeResultsComponent },
  { path: 'bicicleta-detalle', component: BikeDetailComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    BusyModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
