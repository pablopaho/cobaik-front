import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgDatepickerModule } from 'ng2-datepicker';
import { DatepickerOptions } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { BusyModule } from 'angular2-busy';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeService } from './bike.service';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { BikeResultsComponent } from './bike-results/bike-results.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terminos-condiciones', component: TermsAndConditionsComponent },
  { path: 'bicicletas', component: BikeResultsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

const options: DatepickerOptions = {
  minYear: 1970,
  maxYear: 2006,
  firstCalendarDay: 0
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BikeDetailComponent,
    TermsAndConditionsComponent,
    MenuComponent,
    FooterComponent,
    BikeResultsComponent,
    BikeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      Ng2PageScrollModule,
      NgDatepickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    BusyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
