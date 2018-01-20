import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
