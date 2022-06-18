import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CitiesCardComponent} from "./cities-card/cities-card.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cities', component: CitiesCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
