import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  heroForm = new FormGroup({
    name: new FormControl()
  });

  heroForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createFormWithBuilder();
  }

  ngOnInit() {
  }

  createFormWithBuilder() {
    this.heroForm2 = this.fb.group({
      name: ''
    });
  }
}
