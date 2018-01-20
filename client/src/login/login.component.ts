import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public afficherInscription: boolean;

  constructor () {
  }

  public ngOnInit(): void {
      this.afficherInscription = false;
  }

  public changerFormulaire(): void {
      this.afficherInscription = !this.afficherInscription;
  }
}
