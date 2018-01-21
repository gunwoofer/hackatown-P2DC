import { Component, OnInit } from '@angular/core';
import { profilesTest, UserProfile } from '../commun/Profile';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public userProfile: UserProfile;

  constructor() {
    //this.userProfile = userProfile; userProfile : UserProfile
    this.userProfile = profilesTest [0];
  }

  ngOnInit() {
  }

}
