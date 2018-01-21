import { ListeChallengeComponent } from './listeChallenge/listeChallenge.component';
import { MapLocationComponent } from './map-location/map-location.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescriptionComponent } from './description/description.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map/:adresse', component: MapLocationComponent },
  { path: 'map', component: MapLocationComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserCardComponent },
  { path: 'liste', component: ListeChallengeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
