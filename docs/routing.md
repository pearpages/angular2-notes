- Route Configuration
- Router Outlets
- Router Links
- Route Parameters
- Child Routers

### Intro

> Routing allows our application to navigate between different Components, passing parameters where needed

```typescript
@RouteConbfig({})
```

```html
<router-outlet></router-outlet>

<a [routerLink]="linkParameters"></a>
```

```typescript
RouteParams
// $routeParams in angular1
```

```tyescript
Router
// $router in angular1
```

```html
<script src="node_modules/angular2/bundles/router.dv.js"></script>
```

### Routing in 4 steps

1. ROUTER_PROVIDERS
2. @RouteConfig
3. ```<router-outlet>```
4. [routerLink]

#### RouteConfig

+ **@RouteConfig** accepts an array of route definitions
+ **path** maps the address
+ **component** maps to the Component and its Template

```typescript
@RouteConfig([
// the name of the route must be PascalCase 
// Default route
{ path: '/', name: 'Vehicles', component: VehicleListComponent, useAsDefault: true},
// :id is a routing parameter
{ path: '/list/:id', name: 'Vehicles', component: VehicleListComponent },
{ path: '/:id', name: 'Vehicle', component: VehicleComponent }
])
export class VehiclesComponent {}
```

```typescript
@Component({
	selector: 'story-vehicles',
	template: `<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES],
	providers: [VehicleService]
})
```

```html
<nav>
	<a [routerLink]="['Dashboard']">Dashboard</a>
	<a [routerLink]="['Characters']">Characters</a>
	<a [routerLink]="['Vehicles']">Vehicles</a>
	<router-outlet></router-outlet>
</nav>
```

### Example

```typescript
// app.component.ts

import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, @RouteConfig } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'; // <--
import 'rxjs/Rx'; // load the full rxjs

import { CharacterListComponent } from './characters/character-list.component';
import { CharacterService } from './characters/character.service';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { VehicleComponent } from './vehicles/vehicle.component';
import { VehicleService } from './vehicles/vehicle.service';
import { CONFIG } from './config';

@Compontent({
	selector: 'story-app',
	templateUrl: 'app/app.component.html',
	styles: [`
		nav ul {list-style-type: none;}
		nav ul li {padding: 4px; cursor: pointer; display: inline-block}
	`],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS, // <--
		CharacterService,
		VehicleService
	]
})
@RouteConfig([ // <-- 
	{path: '/characters', name: 'Characters', component: CharacterListComponent, useAsDefault: true},
	{path: '/vehicles', name: 'Vehciles', component: VehicleListComponent},
	{path: '/vehicle/:id', name: 'Vehicle', component: VehicleComponent}
])
export class AppComponent{}
```

```html
<div>
	<header>
		<h1>Title</h1>
		<h3>Subtitle</h3>
		<nav>
			<ul>
				<li><a [routerLink]="['Characters']">Characters</a></li>
				<li><a [routerLink]="['Vehicles']">Vehicles</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<section>
			<router-outlet></router-outlet>
		</section>
	</main>
</div>
```

```typsecript
// vehicle.component.ts

import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/core';
import { VehicleService, Vehicle } from './vehicle.service';

@Component({
	selector: 'story-vehicle',
	templateUrl: 'app/vehicles/vehicle.component.html'
})
export class VehicleComponent implements OnInit {
	@Input() vehicle: Vehicle;

	constructor(
		private _routeParams: RouteParams, 
		private _vehicleService: VehicleService
		) {}

	ngOnInit() {
		if( !this.vehicle) {
			let id = +this._routeParams.get('id');
			this._vehicleService.getVehicle(id)
				.subscribe((vehicle: Vehicle) => this.vehicle = vehicle);
		}
	}
}
```

```html
<article>
	<h4>My Vehicles</h4>

	<ul class="vehicles">
		<li *ngFor="#vehicle of vehicles">
			<a href="" [routerLink]="['Vehicle', {id: vehicle.id}]">
			{{vehicle.id}}. {{vehicle.name}}
			</a>
		</li>
	</ul>
</article>
```

```html
<article>
	<div *ngIf="vehicle">
		<h4>{{vehicle.name}} details</h4>
	</div>

	<div>
		<label for="nametext">Name</label>
		<input type="text" id="nametext" [(ngModel)]="vehicle.name">
	</div>

	<div>
		<label for="typetext">Type</label>
		<input type="text" id="typetext" [(ngModel)]="vehicle.type">
	</div>
</article>
```

### Child Routers

> A Component may define routes for other Components. This creates a series of hierachical child routes.

**@RouteConfig** accepts an array of route definitions.

This indicates a *child route*.
```/...```

The router can help us with lazyloading the modules.

```typescript
@RouteConfig([
	{ path: '/dashboard', name: 'Dashbaord', component: DashboardComponent, useAsDefault: true},
	{ path: '/characters/...', name: 'Characters', component: CharactersComponent },
	{ path: '/vehicles/...', name: 'Vehicles', component: VehiclesComponent }
])
```