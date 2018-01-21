import { MapService } from './../map-location/map.service';
import { Challenge, tableauChallenges } from './../listeChallenge/challenge';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Task } from './task';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public showSuccess: boolean;

  constructor(private router: Router, private mapService: MapService) { }


  public ngOnInit(): void {
    this.showSuccess = false;
  }

  public changeRouting(): void {
    this.router.navigateByUrl('/home');
  }

  public submitYourTask(form: NgForm): void {
    this.mapService.getLocation(form.value.adress)
      .then((response) => {
        tableauChallenges.push(
          new Challenge(form.value.task, 
                        form.value.adress, 
                        6, 
                        parseInt(form.value.salary), 
                        form.value.details, 
                        response.results[0].geometry.location.lat, 
                        response.results[0].geometry.location.lng));
        this.showSuccess = true;
      });
  }

}
