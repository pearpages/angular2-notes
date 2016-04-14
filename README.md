+ Components and their Templates
+ Template Syntax
+ Services using Dependency Injetion
+ Routing
+ HTTP and Data

> We can use ES5, ES2015, or TypeScript to write Angular 2.

## Architecture

### Language Choices

|Language|Compile|Types|JS|
|:--|:--|:--|:--|
|ES5|No|No|Yes|
|ES6/ES2015|Yes (BabelJS)|No|Yes|
|Typescript|Yes|Yes|Yes|
|Dart|Yes|Yes|No|

### Components

#### Angular1 Controller
```html
<body ng-controller="MyController as vm">
	<h3 ng-bind="vm.story.name"></h3>
</body>
```

```javascript
(function() {
	'use strict';

	angular.module("app")
	.controller('MyController',[MyController]);

	function MyController() {
		var vm = this;
		vm.story = {id:100, name: 'Super cool title'};
	}
})();
```

#### Angular2 Component

```html
<my-story></my-story>
```

```typescript
import { Component } from 'angular2/core';

@Component({
// this is a decorator and adds functionality to the class
	selector: 'my-story',
	template: '<h3>{{story.name}}</h3>'
})
export class StoryComponent {
	story = {id: 100, name: 'Super Cool Title'};
	color = 'blue';
}
```

### Bootstrapping Angular

#### Angular1

```html
<html ng-app="app">
```

#### Angular2

```typescript
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

boostrap(AppComponent);
```

### Structural Built-In Directives

#### Angular1

```html
<ul>
	<li ng-repeat="vehicle in vm.vehicles">
		{{vehicle.name}}
	</li>
</ul>
<div ng-if="vm.vehicles.length">
	<h3>You have {{vm.vehicles.length}} vehicles</h3>
</div>
```

#### Angular2

*ngFor <-- Structural directive Indicate by the '*' prefix. Changes the structure.

```html
<ul>
	<li *ngFor="#vehicle of vehicles">
		{{vehicle.name}}
	</li>
</ul>
<div *ngIf="vehicles.length">
	<h3>You have {{vehicles.length}} vehicles</h3>
</div>
```

### Data Binding

+ Interpolation
+ One Way Binding
+ Event Binding
+ Two Way Binding

#### Interpolation

##### Angular1

In angular1 we had to give a context and therefore we added the **vm.**.

```html
<h3>{{vm.story.name}}</h3>
```

##### Angular2

```html
<h3>{{story.name}}</h3>
```

#### One Way Binding

##### Angular1 

```html
<h3 ng-bind="vm.story.name"></h3>
```

##### Angular2

```html
<h3 [innerText]="story.name"></h3>

<div [style.color]="color"></div>
```

We can do this with Any html property.

#### Event Binding

##### Angular1 

```html
<button
	ng-click="vm.log('click')"
	ng-blur="vm.log('blur')">OK></button>
```

##### Angular2

There are no directives, these are HTML EVENTS!

```html
<button
	(click)="log('click')"
	(blur)="log('blur')">OK></button>
```

#### Two Way Binding

##### Angular1 

```html
<input ng-model="vm.story.name">
```

##### Angular2

Banana in a Box

```html
<input [(ngModel)]="story.name">
```

Example

```html
<div>
	<h3>{{title}}</h3>
	<div>
		2 Way Binding
		<input [(ngModel)]="story.name">
	</div>
	<p>{{story.name}}</p>
	<div>
		1 Way Binding
		<input [value]="story.name">
	</div>
</div>
```

### Less Directives

40+ Angular1 Built-In Directives that go away.

Now we just bind to the html events for example.

```html
<!-- Angular1 -->
<div ng-style="vm.story ? {visibility: 'visible'} : {visibility: 'hidden'}"></div>

<!-- Angular2 -->
<div [style.visibility]="story ? 'visible' : 'hidden'"></div>
```

```html
<!-- Angular1 -->
<img ng-src="{{vm.imagePath}}">
<!-- Angular2 -->
<img [src]="imagePath">
```

```html
<!-- Angular1 -->
<a ng-href="{{vm.link}}">{{vm.story}}</a>
<!-- Angular2 -->
<a [href]="link">{{story}}</a>
```

### Services

+ Angular1
  - Factories
  - Services
  - Providers
  - Constants
  - Values
+ Angular2
  - Class

#### Angular1

```javascript
(function() {
	'use strict';

	angular.module("app")
	.service('VehicleService',[VehicleService]);

	function VehicleService() {
		this.getVehciles = function () {
			return [
				{id:1, name="xyz" },
				{id:2, name="xyz-342" },
				{id:3, name="a2000" },
			];
		};
	}
})();
```

#### Angular2

```typescript
import {Injectable} from 'angular2/core';

@Injectable()
export class VehicleService {
	getVehicles = () => [
		{id:1, name="xyz" },
		{id:2, name="xyz-342" },
		{id:3, name="a2000" }
	];
}
```

### Dependency Injection

#### Angular1 Registration

```javascript
angular
	.module('app')
	.service('VehicleService', VehicleService);
```

#### Angular2 Registration

See the providers attribute

```typescript
import {VehicleService} from '/vehicle.service';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.component.html',
	providers: [VehicleService]
})
```

#### Angular1 Injection

```javascript
angular
	.module('app')
	.controller('VehiclesController', VehiclesController);

	VehiclesController.$inject = ['VehiclesService']; // <-- We are injecting here the service
```

#### Angular2 Injection

See the injection in the constructor sentence.

```typescript
import { VehicleService} from './vehicle.service';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.component.html',
	providers: [VehicleService]
})
export class VehiclesComponent {
	constructor(private _vehicleService: VehicleService) {}
	vehicles = this._vehicleService.getVehicles();
}
```

### Resources

+ [Docs](https://angular.io/docs/)
+ [CHEAT SHEET](https://angular.io/docs/ts/latest/cheatsheet.html)
+ [Tour of Heroes TUTORIAL](https://angular.io/docs/ts/latest/tutorial/)

## Essentials

+ Modules
+ Components
+ Templates
+ Metadata

### Modules

> A module exports an asset such as a Service, Component, or a shared value.

We use ES6 style modules with Angular2.

#### Exporting Modules

```typsecript
// vehicle.service.ts

export interface Vehicle {
	id: number;
	name: string;
}

export class VehicileService {
	// ...
}
```

#### Importing Modules

Modules and their contents can be imported using the *import* keyword.

We import the Vehicle and VehicleService using [destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```typescript
// vehicle.component.ts
import { Component } from 'angular2/core';
import { Vehicle, VehicleService } from '../vehicle.service';
```

### Components

> A component contains application logic that controls a region of the user interface that we call view.

```typescript
import { Component } from 'angular2/core';
import { Vehicle } from './vehicle.service';

// @Component is Metadata, we describe the component
@Component({
	selector: 'story-vehicles',
	templateUrl: './vehicles.component.html'
})
```

// We define the component
export class VehicleListComponent {
	vehciles: Vehicle[];
}

#### Structure Example

- App Component // main.ts
  - Header Component
  - Nav Component
  - Content Component
  - Footer Component

```typescript
// main.ts

// Entry point for the app
// This is where we start

import { bootstrap } from 'angular2/platform/browser';
import { StoryComponent } from './story.component';

bootstrap(StoryComponent);
```

```typescript
// story.component.ts

@Component({
	selector: 'my-story',
	templateUrl: 'app/story.component.html'
})
export class StoryComponent {
	name = 'Han Solo';
}
```

```html
<!-- story.component.html -->
<h3>My name is {{name}}</h3>
```

```html
<!-- index.html -->
<my-story></my-story>
```

### Templates

> Templates are mostly HTML, with a little help from Angular. They tell Angular how to render the Component.

+ directives
+ interpolation
+ nested components

```html
<ul>
	<li *ngFor="#vehicle of vehicles">
		{{vehicle.id}} {{vehicle.name}}
	</li>
</ul>

<vehicle *ngIf="selectedVehicle" [vehicle]="selectedVehicle"></vehicle>
```

### Nested Components

Here we can see how our *CharacterListComponent* is using our *CharacterComponent*.

```typescript
// character-list.component.ts
import { Component } from 'angular2/core';
import { Character } from './character';
import { CharacterComponent } from './character.component';

// directives: [CharacterComponent] <-- is very important because tells the nested components

@Component({
	selecctor: 'my-chacter-list',
	templateUrl: 'app/character-list.component.html',
	directives: [CharactercComponent]
})
export class CharacterListComponent {
	selectedCharacter: Character;
	characters = [
		new Character(1, 'Han Solo'),
		new Character(2, 'Luke Skywalker'),
		new Character(3, 'BB-8'),
		new Character(4, 'Rey')
	];

	select(character: Character) {
		this.selectedCharacter = character;
	}
}
```

```html
<!-- CharacterListComponent -->
<ul>
	<li *ngFor="#character of characters" (click)="select(character)">{{character.name}}</li>
</ul>

<my-character *ngIf="selectedCharacter" [character]="selectedCharacter"></my-character>
```

```typescript
// character.component.ts
import { Component, Input } from 'angular2/core';
import { Character } from './character';

@Component({
	selector: 'my-character',
	templateUrl: 'app/character.component.html'
})
export class CharacterComponent {
	@Input() character: Character;
}
```

```html
<h3>We selected {{character.name}}</h3>
```

### Metadata

> We use Metadata to tell Angular about the objects we build.

```typescript
@Component({
    slector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterDetailComponent],
    providers: [HTTP_PROVIDERS, CharacterService]
})
```

```typescript
@Component({
    selector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterComponent],
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    constructor(private _characterService: CharacterService) {}

    ngOnInit() {
        this._characterService.getCharacters(this.storyId)
            .subscribe(characters => this.characters = characters);
    }

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}
```

### Communication with Input and Output

> Components allow input properties to flow in, while output events allow a child Component to communicate with a parent Component.

```typescript
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}
```

```html
<div>
    <h1>Storyline Tracker</h1>
    <h3>Component Demo</h3>
    <story-characters [storyId]="7" (changed)=changed($event)></story-characters>
</div>
```

### ViewChild

> Use ViewChild when a parent Component needs to access a member of its child Component

Child

```typescript
export class FilterComponent {
    @Output() changed: EventEmitter<string>;
    filter: string;

    clear() {
        this.filter = '';
    }
    // ...
}
```

Parent

export class CharacterListComponent {
    characters: Character[];
    @ViewChild(Filtercomponent) filter: FilterComponent;

    filtered = this.characters;

    getCharacters() {
        this._characterService.getCharacters()
            .subscribe(characters => {
                this.characters = this.filtered = characters;
                this.filter.clear();
                });
    }

    // ...
}

## Displaying Data

### Data Binding

> We use data binding to help coordinate communication between a Component and its Template.

+ Interpolation: {{expression}}
+ One Way Binding: [property] = "expression"
+ Event Binding: (event) = "statement"
+ Two Way Binding: [(ngModel)] = "property"

Unidirectional data flow 

### Interpolation

One Way In.

```html
<h3>Vehicle: {{vehicle.name}}</h3>
<div>
    <img src="{{vehicle.imageUrl}}">
    <a href="{{vehicle.wikiLink}}">Wiki</a>
    <!-- the quesetion mark makes it optional -->
    My vehicle is <span>{{vehicle?.name}}</span>
</div>
```

### Property Binding

> Using the [] to send values from the Component to the Template.

We set properties and events of DOM elements, not attributes.

We use the *Metadata* to tell the *Component* about the *Template*.

```
{{expression}}
[target] = "expression"
bind-target = "expression"
```

```html
<img [src]="vehicle.imageUrl" > <!-- element property -->
<vehicle-detail [vehicle]="currentVehicle"></vehicle-detail> <!-- component property -->
<div [ngClass]= "{selected: isSelected}">X-Wing</div> <!-- directive property -->
```

+ For attributes we use **attr**
+ Use dots for nested properties

```html
<button [attr.aria-label]>ok</button> <!-- attribute binding -->
<div [class.isStopped="isStopped"]>Stopped</div> <!-- class property binding -->
<button [style.color]="isStopped ? 'red' : 'blue'"></button> <!-- style property binding -->
```

### Event Binding

```
(target) = "statement"
on-target = "statement"
```

```html
<button (click)="save()">Save</button> <!-- element event -->
<vehicle-detail (changed)="vehicleChanged()"></vehicle-detail> <!-- component event -->
```

One way to the Component

```html
<input [value]="vehicle.name"
(input)="vehicle.name=$event.target.value">
<!-- (input): Input change event-->
<!-- $event: is the event message -->
```

#### Custom Events

+ **EventEmitter** defines a new event
+ Fire its **emit** method to raise event with data

```typescript
@Input() vehicle: Vehicle;
@Output() onChanged: new EventEmitter<Vehicle>();
changed() { this.onChanged.emit(this.vehicle); }
```

```html
<button (click)="select(character.name)"></button>
```

```typescript
select(name: string) {
	let msg = `You selected ${name}`;
	console.log(msg);
	this.isSelected = !this.isSelected;
}
```

```html
<input type="text" id="nametext" class="my-input" 
[value]="character.name" 
(input)="character.name=$event.target.value">

<img [src]="character.imageUrl" style="width:50px" 	
 [style.background]="color"
 (mouseenter)="color = '#CCC'" 
 (mouseleave)="color = '#EEE'">
```

### Two Way Binding

> [()] sends a value from Component to Template, and sends value changes in the Template to the Component.

```
[(ngModel)]="expression"
bindon-NgModel="expression"
```

```html
<input [(ngModel)]="vehicle.name"> <!-- built-in directive -->
```

### Built-in Directives

> When Angular renders templates, it transforms the DOM according to instructions from Directives.

|Angular1|Angular2|Angular2 example|Alternative way|
|:--|:--|:--|:--|
|ng-class|ngClass|[ngClass]="{active: isActive, color: myColor}"||
|ng-style|ngStyle|[ngStyle]="{color:colorPreference}"|[style.color]="colorPreference"|
|ng-repeat|*ngFor|||
|ng-if|*ngIf|||
|ng-switch|*ngSwitch|||

```html
<div [ngStyle]="setStyles()">{{vehicle.name}}</div> <!-- ngStyle is better for setting multiple styles -->
<div [ngClass]="setClasses()">{{vehicle.name}}</div> <!-- the same for multiple classes -->
```

**ngIf** conditionally removes elements from the DOM.

```html
<div *ngIf="currentVehicle">
	You selected {{currentVehicle.name}}
</div>
```

```html
<!-- # declares a local variable -->
<div *ngFor="#story of stories, #i=index">
 {{i}}. {{story.name}}
</div>
```

### Pipes (filters in  Angular1)

> Pipes allow us to transform data for display in a Template.

```html
<p>{{character.name | uppercase}}</p>
<p>{{character.name | lowercase}}</p>
<p>{{eventDate | date: 'medium'}}</p>
<p>{{eventDate | date: 'yMMMd'}}</p>
<p>{{price | currency}}</p>
<!-- {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} -->
<p>{{value | perecent: '1.1-1'}}</p>
<p>{{value | number: '1.1-3'}}</p>
```

#### Async Pipe

Using pipes we can transform values before rendering them.

> Subscribes to a Promise or an Observable, returning the latest value emitted.

```typescript
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({name: 'myCustomPipe'})
exports class MyCustomPipe implements PipeTransform {
	transform(value: string, args: any[]) {
		return // transformed value
	}
}
```

## Services, Dependency Injection, and Component Lifecycle Hooks

+ Services
+ Dependency Injection
+ Component Lifecycle Hooks

### Services

> A service provides anything our application needs. It often shares data or functions between other Angular features.

In Angular1 we had:

- Factories
- Services
- Providers
- Constants
- Values

But in Angular2 we do all of them with **Class**.

```typescript
// vehicle.service.ts

@Injectable()
export class VehcileService {
	getVehicles() {
		return [
			new Vehicle(10, 'abc3d'),
			new Vehicle(12, 'ddasd2000'),
			new Vehicle(14, 'XZY200')
		];
	}
}
```

```typescript
import { Injectable } from 'angular2/core';

// the import from another file would be:
// import { Character } from './character.service'
export class Character {
	constructor(public id: number, public name: string, public color: string);
}

@Injectable()
export class CharacterService {
	getCharacters() {
		return [
			new Character(10, 'abc3d'),
			new Character(12, 'ddasd2000'),
			new Character(14, 'XZY200')
		];
	}
}
```

### Dependency Injection

> Dependency Injection is how we provide an instance of a class to another Angular feature

Service is injected into the Component's constructor

```typescript
// vehicle.component.ts
import { VehicleService } from './vehicle.service';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.component.html',
	providers: [VehicleService]
})
export class VehicleListComponent {
	vehicles: Vehicle[];

	constructor(private _vehicleService: VehicleService) {
		this._vehicleService.getVehicles()
			.subscribe(vehicles => this.vehicles = vehicles);
	}
}
```

```typescript
@Injectable()
export class VehicleService {
	constructor(private _http: Http) {}

	getVehicles() {
		return this._http.get(vehicleUrl)
			.map((response:Response) => <Vehicle[]>response.json().data);
	}
}
```

Register the service with the injector at the parent that contains all components that require the service. Otherwise you will get more than one instance!

### Component Lifecycle Hooks

> Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic.

```typescript
@Component({
    selector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterDetailComponent],
    providers: [HTTP_PROVIDERS,CharacterService]
})
// Implements the lifecycle hook's interface OnInit
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    constructor(private _characterService: CharacterService) {}

    // When the Component initializes, the ngOnInit function is executed
    ngOnInit() {
        this.characters = this._characterService.getCharacters(this.storyId);
    }

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}
```

#### Component Lifefycle

> The Lifecycle Interface helps enforce the valid use of a hook.

+ ngOnChanges
+ ngOnInit (time of creation)
+ ngAfterViewInit
+ ngOnDestroy

#### Example

```html
<ul>
    <li *ngFor="#character of characters" (click)="select(character)">
    {{character.name}}
    </li>
</ul>

<button (click)="clear()">clear</button>
<ul class="messages">
	<li *ngFor="#msg of messages">{{msg}}</li>
</ul>

<my-character *ngIf="selectedCharacter" (onLifecycleHookFire)="log($event)" [character]="selectedCharacter"></my-character>
```

```typescript
// character-list.component.ts

import { Component, OnInit } from 'angular2/core';
import { Character, CharacterService } from './character.service';
import { CharacterComponent} from './character.component';

@Component({
	selector: 'my-character-list',
	templateUrl: 'app/character-list.component.html',
	styles: ['li {cursor: pointer;}'],
	directives: [CharacterComponent]
})
export class CharacterListComponent implements OnInit {
	selectedCharacter: Character;
	characters: Character[] = [];
	messages: string[] = [];

	constructor(private _characterService: CharacterService) {}

	ngOnInit(){
		this.chracters = this._characterService.getCharacters();
	}

	select(character: Character) {
		this.slectedCharacter = character;
	}

	clear() {
		this.selectedCharacter = null;
	}

	log(msg: string){
		this.messages.splice(0,0,msg);
		console.log(msg);
	}
}
```

```typescript
import { Component, EventEmitter, Input, Output, OnChanges, OnInit, AfterViewInit, OnDestgory} from 'angular2/core';
import { Character } from './character.service';
```

@Component({
	selector: 'my-character',
	templateUrl: 'app/character.component.html'
})
export class CharacterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
	@Input() character: Character;
	@Output() onLifecycleHookFire = new EventEmitter<string>();

	ngOnChanges() {
		this.onLifecycleHookFire.emit(`ngOnChanges for ${this.character.name}`);
	}

	ngOnInit() {
		this.onLifecycleHookFire.emit(`ngOnInit for ${this.character.name}`);
	}

	ngAfterViewInit() {
		this.onLifecycleHookFire.emit(`ngAFterViewInit for ${this.character.name}`);
	}

	ngOnDestroy() {
		console.log(`ngOnDestroy for ${this.character.name}`);
	}
}

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