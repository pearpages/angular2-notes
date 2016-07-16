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

+ ngOnChanges (any property changes)
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