import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  constructor(private _builder: FormBuilder) { }

  ngOnInit() {
  }

}
