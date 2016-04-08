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

