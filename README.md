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

