import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public afficherInscription: boolean;

    public nameSignUp: string;
    public passwordSignUp: string;
    public emailSignUp: string;

    public usernameLogin: string;
    public passwordLogin: string;



  constructor (private router: Router) {
  }

  public ngOnInit(): void {
      this.afficherInscription = false;
  }

  public changerFormulaire(): void {
      this.afficherInscription = !this.afficherInscription;
  }

  public login(): void {
      // login
    this.router.navigateByUrl('/home');
  }

  public signup(): void {
      // signup
      this.router.navigateByUrl('/home');
  }

  public checkFormSignUp(): boolean {
      if (this.nameSignUp && this.passwordSignUp && this.emailSignUp) {
          return true;
      }
      return false;
  }

  public checkFormLogin(): boolean {
      if (this.usernameLogin && this.passwordLogin) {
          return true;
      }
      return false;
  }
}
