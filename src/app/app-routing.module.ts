import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BikeResultsComponent } from './bike-results/bike-results.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';

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
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(
                                   appRoutes,
                                   { enableTracing: false } // <-- debugging purposes only
                                   )
             ]
})

export class AppRoutingModule {}
