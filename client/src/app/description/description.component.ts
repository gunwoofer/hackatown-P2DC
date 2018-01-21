import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Task } from './task';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public showSuccess: boolean;

  constructor(private router: Router) {}


  public ngOnInit(): void {
    this.showSuccess = false;
  }

  public changeRouting(): void {
    this.router.navigateByUrl('/task');
  }

}
