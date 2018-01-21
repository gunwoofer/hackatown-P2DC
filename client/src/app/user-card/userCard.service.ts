import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserCardService implements OnInit {

  public userId;
  private changementUserId = new Subject<number>();
  public changementUserIdObservable = this.changementUserId.asObservable();


  constructor() {
  }

  ngOnInit(): void {
    this.userId = 0;
  }

  public setUserId(userId: number): void {
    this.userId = userId;
    this.changementUserId.next(userId);
  }
}
