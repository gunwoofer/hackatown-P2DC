import { Router, ActivatedRoute } from '@angular/router';
import { Challenge } from './challenge';
import { ListeChallengeService } from './listeChallenge.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-liste-challenge',
    templateUrl: './listeChallenge.component.html',
    styleUrls: ['./listeChallenge.component.css']
})
export class ListeChallengeComponent implements OnInit {

    public listeChallenge: Challenge[];

    constructor(private listeChallengeService: ListeChallengeService, private router: Router) { }

    public ngOnInit() {
        this.listeChallenge = this.listeChallengeService.genererChallengeMock();
        console.log(this.listeChallenge);
    }

    public back(): void {
        this.router.navigateByUrl('home');
    }

    public moreInfo(challenge: Challenge): void {
        this.router.navigate(['/map', challenge.adresse]);
    }



}
