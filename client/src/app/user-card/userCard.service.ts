import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class UserCardService {

  public userId;
  //private changementUserId = new Subject<number>();
  //public changementUserIdObservable = this.changementUserId.asObservable();


  constructor() {
    this.userId = 5;
  }

  public setUserId(userId: number): void {
    this.userId = userId;
    //this.changementUserId.next(userId);
  }
}
