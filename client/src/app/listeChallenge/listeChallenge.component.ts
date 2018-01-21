import { Router } from '@angular/router';
import { Challenge, tableauChallenges } from './challenge';
import { Component, OnInit } from '@angular/core';
import { UserCardService } from '../user-card/userCard.service';

@Component({
  selector: 'app-liste-challenge',
  templateUrl: './listeChallenge.component.html',
  styleUrls: ['./listeChallenge.component.css']
})
export class ListeChallengeComponent implements OnInit {

  public listeChallenge: Challenge[];

  constructor(private router: Router, private userCardService: UserCardService) {
  }

  public ngOnInit() {
    this.listeChallenge = tableauChallenges;
    console.log(this.listeChallenge);
  }

  public back(): void {
    this.router.navigate(['home']);
  }

  public showMap(): void {
    this.router.navigate(['map']);
  }

  public showProfile(): void {
    this.router.navigate(['profile']);
  }

  public moreInfo(challenge : Challenge) {
    this.userCardService.setUserId(challenge.auteur);
    this.router.navigate(['user']);
  }


}
