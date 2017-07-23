import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'host-examaple-son',
  template: `
  <div class="sp-host-example-son">
  <h5>Son Component</h5>
  <p>Nullam non ante a sapien fermentum imperdiet facilisis placerat arcu. Donec dolor dolor, elementum et finibus et, ultrices vel purus. Cras lorem elit, pharetra ut tempor vel, vehicula vel metus. Suspendisse potenti. Aenean mollis cursus tristique. Nunc vitae eros ligula. Pellentesque sit amet arcu massa. Curabitur euismod, eros eget molestie dignissim, ipsum arcu tincidunt magna, quis eleifend augue nisi sit amet tellus. Vestibulum at metus ac tellus varius fermentum.</p>
  </div>
  <pre>
    :host
      border: 1px solid red;
      display: block;

    :host(.green)
      border-color: green;

    :host-context(.blue)
      border-color: blue;
  </pre>
  `,
  styles: [`
    :host {
      border: 5px solid red;
      display: block;
    }
    :host(.green) {
      border-color: green;
    }
    :host-context(.blue) {
      border-color: blue;
    }
  `]
})

export class HostExampleSonComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
