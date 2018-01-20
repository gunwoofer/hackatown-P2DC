import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  locationChosen: boolean;

  public ngOnInit(): void {
    this.latitude = 51.678418;
    this.longitude = 7.809007;
    this.locationChosen = false;
  }


  public onChoseLocation(event): void {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}
