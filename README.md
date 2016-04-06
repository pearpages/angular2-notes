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

### From Angular 1 to Angular 2

#### Controllers

Angular 1
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

Angular 2

```typescript
import { Component } from 'angular2/core';

@Component({
	selector: 'my-story',
	template: '<h3>{{story.name}}</h3>'
})
export class StoryComponent {
	story = {id: 100, name: 'Super Cool Title'};
}
```

### Comparing Concepts from Angular 1 to 2

### Resources
