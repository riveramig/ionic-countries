import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AuthguardService } from 'src/app/services/authguard.service';
import { CountryComponent } from 'src/app/country/country.component';

const routes: Routes = [
  {
    canActivate:[AuthguardService],
    path:'country',
    component:CountryComponent
  },
  {
    canActivate:[AuthguardService],
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
