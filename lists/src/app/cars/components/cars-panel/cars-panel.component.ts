import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-panel',
  templateUrl: './cars-panel.component.html',
  styleUrls: ['./cars-panel.component.css']
})
export class CarsPanelComponent implements OnInit {

  ngOnInit() {}

  handleCarClick(id) {
    console.log(id);
  }
}
