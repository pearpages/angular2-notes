import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'host-example-parent',
  template: `
    <div class="sp-host-example-parent">
      <h5>Parent</h5>
      <button (click)="isGreen = !isGreen">Toggle Border Color</button>
      <pre>
        .sp-host-example-parent
          border: 1px solid black;

        ::ng-deep .sp-host-example-son h5
          color: orange;
      </pre>
      <host-examaple-son [class.green]="isGreen"></host-examaple-son>
    </div>
  `,
  styles: [`
    .sp-host-example-parent {
      border: 1px solid black;
    }
    ::ng-deep .sp-host-example-son h5 {
      color: orange;
    }
  `]
})

export class HostExampleParentComponent implements OnInit {
  isGreen = false;

  constructor() { }

  ngOnInit() { }
}
