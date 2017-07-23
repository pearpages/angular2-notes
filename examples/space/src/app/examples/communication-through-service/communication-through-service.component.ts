import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-example-4',
  template: `
  <h4>Communication Through Service</h4>
  <mission-control></mission-control>
  `
})

export class CommunicationThroughtServiceComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
