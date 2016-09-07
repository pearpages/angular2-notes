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
	template: `<h3>{{story.name}}</h3>
	{{story | json}}
	`
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
*ngIf <-- Not going to be added to the DOM

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

+ Interpolation <-- ```<h3>{{story.name}}</h3>```
+ One Way Binding <-- ```<h3 [innerText]="story.name"></h3>```
+ Event Binding --> ```<button (click)="log('click')"></button>```
+ Two Way Binding <-- ```<input [(ngModel)]="story.name">```

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

It is very important to inject the provider in the parent component so all havea access to it. If we inject it again in a child component, then it will be a new instance!!! So only instantiate it once.

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