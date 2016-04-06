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

### From Angular1 to Angular2

#### Components

##### Angular1 Controller
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

##### Angular2 Component

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

#### Boostrapping Angular

##### Angular1

```html
<html ng-app="app">
```

##### Angular2

```typescript
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

boostrap(AppComponent);
```

