+ Components and their Templates
+ Template Syntax
+ Services using Dependency Injetion
+ Routing
+ HTTP and Data

> We can use ES5, ES2015, or TypeScript to write Angular 2.

## Resources

+ [code along](http://jpapa.me/a2firstlook)
+ [Docs](https://angular.io/docs/)
+ [CHEAT SHEET](https://angular.io/docs/ts/latest/cheatsheet.html)
+ [Tour of Heroes TUTORIAL](https://angular.io/docs/ts/latest/tutorial/)

---

## [Architecture](./docs/architecture.md)

## [Essentials](./docs/essentials.md)

## [Displaying Data](./docs/displaying-data.md)

## [Services, Dependency Injection, and Component Lifecycle Hooks](./docs/services-dependency-injection-lifecycle-hooks.md)



## Data with Http

+ HTTTP
+ Observables and Subscriptions
+ Async Pipe
+ Promises

### HTTP

> We use HTTP to get and save data with Promises or Observables. We isolate the HTTP calls in a shared Service.

```javascript
// angular1
this.getVehicles = function() {
	return $http.get('api/vehicles')
		.then(function (response) {
			return response.data.data;
		})
		.catch(handleError);
}
```

```typescript
// angular2
getVehicles() {
	return this._http.get('api/vehicles')
		.map((response: Response) =>
			<Vehicle[]>response.json().data
		)
		.catch(this.handleError);
}
```

### HTTP script

+ htpp is in a seperate module
+ add th reference to **http.dev.js**

#### Step by Step

+ Add script reference to http in index.html
+ Register the Http providers
+ Call Http.get in a Service and return the mapped result
+ Subscribe to the Service's function in the Component


```html
<!-- angular2 -->
<script src="../node/modules/angular2/bundles/http.dev.js"></script>
```

```typescript
import { Component } from 'angular2/core';
//  Located in module angular2/http
import { HTTP_PROVIDERS } from 'angular2/http';

import { Vehicle, VehicleService } from './vehicle/service';
import { VehicleListComponent } from './vehicle-list.component';

@Component({
	selector: 'my-app',
	template: '<my-vehicle-list></my-vehicle-list>',
	directives: [VehcileListComponent],
	providers: [
		// declaring the providers
		HTTP_PROVIDERS,
		VehicleService
	]
})
export class AppComponent {}
```

**HTTP_PROVIDERS** is an array of service providers for HTTP.

```typescript
@Injectable()
export class VehicleService {
	constructor(private _http: Htpp) {}

	getVehicles() {
		// make and return the async GET call
		return this._http.get('api/vehicles.json')
			// we map the response
			.map((response: Response) => <Vehicle[]>response.json().data)
			.catch(this.handleError);
	}

	// handle the exception. always!!
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
```

```typescript
// Subscribing to the Observable

constructor(private _vehicleService: VehicleService) { }	
ngOnInit() { this.getHeroes(); }
getHeroes() {
	this._vehicleService.getVehicles()
		// subscribe to the observable
		.subscribe(
			// success an failure cases
			vehicles => this.vehicles = vehicles,
			error => this.errorMessage = <any>error
		);
}
```

### Adding Exception Handling

```typescript
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2'/http';
import { Observable } from 'rxjs/Rx';

export class Vehicle {
	constructor(public id: number, public name: string) {}

@Injectable()
export class VehicleService {
	constructor(private _http: Http) {}

	getVehicles() {
		return this._http.get('api/vehicles.json')
		.map((response: Response) => <Vehcile[]>response.json().data)
		.do(data => console.log.(data))
		.catch(this.handleError);
	}

	handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
}
}
```

```typescript
import { Component } from 'angular2/core';
import { Vehicle, VehicleService } from './vehcile.service';
import { VehicleComponent } form './vehicle.component';

@Component({
	selector: 'my-vehicle-list',
	templateUrl: 'app/vehicle-list.component.html',
	styles: ['li {cursoir: pointer;} .error {color:red;}'],
	directives: [vehicleComponent]
})
export class VehicleListComponent {
	errorMessage: string;
	vehicles: Vehicle[]:
	selectedVehicle: Vehicle;

	constructor(private _vehicleService: VehicleService) {}

	ngOnInit() { this.getHeroes(); }

	getHeroes() {
		this._vehicleService.getVehicles()
			.subcribe(
				vehicles => this.vehicles = vehicles,
				error => this.errorMessage = <any>error
			);
	}

	select(vehicle: Vehicle) {
		this.selectedVehicle = vehicle;
	}
}
```

### RxJs

[ReactiveX](http://reactivex.io/)

> RxJs (Reactive Js) implements the asynchronous observable pattern and is widely used in Angular 2.

```typescript
import 'rxjs/Rx';
// for production, only import the modules you require
```

We do not return the response. Service does the dirty work. The consumers simply get the data.

```typescript
// vehicle.service.ts
return this._http.get('api/vehicles')
	.map((response:: Response) => 
		// json() is defined by the http spec
		// data is what we defined on the server
		<Vehicle[]>response.json().data
	)
	// catch errors
	.catch(this.handleError);
```

We sometimes pass error messages to the consumer for presentation.

### Async Pipe

> The Async Pipe receives a Promise or Observable as input and subscribes to the input, eventually emitting the value(s) as changes arrive.

+ Component is simplified
+ Grab the **Observable** and set it to the property

```typescript
// vehicle-list.component.ts

vehicles: Observable<Vehicle[]>; // property becomes observable

getHeroes() {
	this.vehicles = this._vehicleService.getVehicles(); // set the observable from the Service
}
```

```html
<ul>
	<li *ngFor="#vehicle of vehicles | async">
		{{ vehicle.name }}
	</li>
</ul>
```

### Promises

```typescript
getVehciles(value? : stgring) {
	return this._http.get('api/vehcles.json')
		.map((response: Response) => <Vehicle[]>response.json().data)
		.toPromise()
		.catch(this.handleError);
}
```

```typescript
export class VehicleListComponent {
	errorMessage: string;
	vehicles: Promise<Vehicle[]>; // <--
	selectedVehicle: Vehicle;

	constructor(private _vehcileServie: vehicleService) {}

	// ...
}
```

```html
<ul>
	<li *ngFor="#vehicle of vehicles | async" (click)="select(vehicle)">{{vehicle.name}}</li>
</ul>
```

## Routing

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