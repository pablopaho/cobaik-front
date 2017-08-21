import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeService } from './bike.service';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terminos-condiciones', component: TermsAndConditionsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BikeDetailComponent,
    TermsAndConditionsComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
