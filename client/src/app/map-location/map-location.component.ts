import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnInit {

    public adresse: string;
    public latitude: number;
    public longitude: number;
    public locationChosen: boolean;

    constructor(private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.adresse = params['adresse'];
         });
         console.log(this.adresse);

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
