import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CitiesCardComponent } from './cities-card/cities-card.component';
import {WeatherService} from "./services/weatherService";
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FiltersComponent,
    SearchBoxComponent,
    HomePageComponent,
    CitiesCardComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
