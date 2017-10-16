import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terminos-condiciones', component: TermsAndConditionsComponent },
  { path: 'bicicletas', component: BikeResultsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BikeDetailComponent,
    TermsAndConditionsComponent,
    MenuComponent,
    FooterComponent,
    BikeResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule,
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
