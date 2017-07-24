import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-communication-through-service',
  template: `
  <h4>Communication Through Service</h4>
  <sp-mission-control></sp-mission-control>
  `
})

export class CommunicationThroughServiceComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
