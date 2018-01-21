import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  constructor(private router: Router) { }

  onClear(form: NgForm) {
    form.reset();
  }

  onSubmit(form: NgForm) {
    this.router.navigateByUrl('/home');
  }

}
