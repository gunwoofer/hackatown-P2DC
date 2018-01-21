import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private clickHelpButton() : void {
    console.log("clic help me button");
  }

  private   clickReleveDefiButton() : void {
    console.log(" releve defi click");
  }


}
