import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit() {
  }

  changeBackground(color: string) {
    this.color = color;
  }

}
