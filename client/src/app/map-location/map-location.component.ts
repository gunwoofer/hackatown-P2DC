import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Challenge, tableauChallenges } from '../listeChallenge/challenge';
import { UserCardService } from '../user-card/userCard.service';
import { MapService } from './map.service';

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



    constructor(private router: Router, private mapService: MapService, private route: ActivatedRoute, private http: Http, private userCardService: UserCardService) {
      // this.challenges
    }

    public geoLocation(): void {
      const location = '2200 rue mansfield';
      this.mapService.getLocation(location).then((response) => console.log(response.results[0]));
    }

    public ngOnInit(): void {

       /* this.route.params.subscribe(params => {
            this.adresse = params['adresse'];
         });*/
        /* console.log(this.adresse);
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
        });*/
    }

    public back(): void {
        this.router.navigateByUrl('/liste');
    }

    public afficherAuthor(challenge : Challenge) {
      this.userCardService.setUserId(challenge.auteur);
      this.router.navigate(['user']);
    }
}
