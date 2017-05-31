import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-panel',
  templateUrl: './cars-panel.component.html',
  styleUrls: ['./cars-panel.component.css']
})
export class CarsPanelComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {}

  handleCarClick(id) {
    console.log(id);
  }

  gotoCar(id: number) {
    this._router.navigate(['/car',id]);
  }
}
