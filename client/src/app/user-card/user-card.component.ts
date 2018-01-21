import { Component, Input, OnInit } from '@angular/core';
import { profilesTest, UserProfile } from '../commun/Profile';
import { UserCardService } from './userCard.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input()
  public userProfileNumber: number;
  public userProfile: UserProfile;

  constructor(private userCardService: UserCardService) {
    //this.userProfile = userProfile; userProfile : UserProfile
    //this.userProfile = profilesTest [0];
   /* userCardService.changementUserIdObservable.subscribe(
      userId => {
        this.userProfile = profilesTest [this.userCardService.userId];
      });*/
    this.userProfile = profilesTest [this.userCardService.userId];
  }

  ngOnInit() {
    // this.userProfile = profilesTest [this.userProfileNumber];
    this.userProfile = profilesTest [this.userCardService.userId];
  }

}
