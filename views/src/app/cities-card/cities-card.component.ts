import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities-card',
  templateUrl: './cities-card.component.html',
  styleUrls: ['./cities-card.component.css']
})
export class CitiesCardComponent{
  cities: Array<{
    "id": number
    "image": string
    "name": string
    "region": string
  }>


  constructor() {
    this.cities = [
      {
        "id": 1,
        "name": "Istanbul",
        "region": "Topkapi",
        "image": "https://media.istockphoto.com/photos/galata-tower-istanbul-sea-front-view-bosporus-turkey-picture-id490218746"
      },
      {
        "id": 2,
        "name": "Istanbul",
        "region": "Eminonu",
        "image": "https://media.istockphoto.com/photos/istanbul-the-capital-of-turkey-picture-id507551802"
      }
    ];

  }
}
