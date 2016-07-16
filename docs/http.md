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