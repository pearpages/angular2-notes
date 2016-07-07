## Essentials

+ Modules
+ Components
+ Templates
+ Metadata

### Modules

> A module exports an asset such as a Service, Component, or a shared value.

We use ES6 style modules with Angular2.

#### Exporting Modules

```typescript
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

```typescript
// We define the component
export class VehicleListComponent {
	vehciles: Vehicle[];
}
```

#### Structure Example

- App Component // main.ts
- Header Component
- Nav Component
- Content Component
- Footer Component

*main.ts* file is the entry point of the app and where we do the bootstrap.

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
	<li *ngFor="let vehicle of vehicles">
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

Components are related to each other with a tree shape. That's why we don't need to declare **providers** more than once in the providers sections if all the rest of components are just sons. Otherwise we will have more than once instance.

```typescript
@Component({
    slector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterDetailComponent],
    providers: [HTTP_PROVIDERS, CharacterService]
})
```

We inject in the constructor.

In the Output we can comunicate with the parent host through an EventEmitter.

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

#### Child

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

#### Parent

So we access *FilterComponent* *filter* method.

```typescript
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
```