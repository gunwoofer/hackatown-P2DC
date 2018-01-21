import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tableauChallenges } from '../listeChallenge/challenge';

declare var google;

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})

export class MapLocationComponent implements OnInit {

    public adresse: string;
    public latitude: number = 45.4978601;
    public longitude: number = -73.6296451;
    public challenges: any[] = tableauChallenges;
      /*[
      {longitude : -73.6296451, latitude : 45.4978601, name : 'baleu'},
      {longitude : 12, latitude : 6, name : 'baleu'},
      {longitude : 12, latitude : 6, name : 'baleu'}
    ]*/



    constructor(private router: Router, private route: ActivatedRoute, private http: Http) {
      // this.challenges
    }

    public ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.adresse = params['adresse'];
         });
         console.log(this.adresse);
        const self = this;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': this.adresse}, function(results, status) {
            if (status === 'OK') {
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
                self.latitude = results[0].geometry.location.lat();
                self.longitude = results[0].geometry.location.lng();
              } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    public back(): void {
        this.router.navigateByUrl('/liste');
    }
}
