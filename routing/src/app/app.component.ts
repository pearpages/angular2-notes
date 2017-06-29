import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <h1>Routing App</h1>
    <ro-nav></ro-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}
