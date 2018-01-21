import { MapService } from './map-location/map.service';
import { ListeChallengeComponent } from './listeChallenge/listeChallenge.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapLocationComponent } from './map-location/map-location.component';
import { DescriptionComponent } from './description/description.component';


import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardService } from './user-card/userCard.service';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    MapLocationComponent,
    DescriptionComponent,
    UserCardComponent,
    ListeChallengeComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuk_evPYxWlWPJ3PrR0Mc_IBhdxGmMNG0'
    }),
    HttpModule
  ],
  providers: [
    UserCardService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
