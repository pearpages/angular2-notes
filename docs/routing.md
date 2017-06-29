# Routing

## index.html

```html
<base href="/">
```

## imports

```ts
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
```

## Routing Module

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './name.component';

const routes: Routes = [
  { path: 'path', component: NameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // forRoot if it's main module
  exports: [RouterModule],
})
export class NameRoutingModule { }

export const routedComponents = [NameComponent];
```

## router-outlet

```html
<router-outlet></router-outlet>
```

## links

```html
<nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
```

## wildcard route

> The router selects the route with a **first match** wins strategy.

```ts
{ path: '**', component: PageNotFoundComponent }
```

## redirecting routes

### pathMatch

+ 'full'
+ 'prefix'

```ts
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }, // <---
  { path: '**', component: PageNotFoundComponent }
];
```

## Module import order matters

> The order of route configuration matters. The router accepts the first route that matches a navigation request path.

## Navigate Imperatively: router.navigate()

```ts
// being in a component
constructor(private router: Router) {}

// ...
  this.router.navigate(['/hero', hero.id]);

  // or

  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);

// ...
```

## ActivatedRoute: the one-stop-shop for route information

+ url: An **Observable** of the route path(s), represented as an array of strings for each part of the route path.
+ data: An **Observable** that contains the data object provided for the route. Also contains any resolved values from the resolve guard.
+ params: An **Observable** that contains the required and optional parameters specific to the route.
+ queryParams: An **Observable** that contains the query parameters available to all routes.
+ fragment: An **Observable** of the URL fragment available to all routes.
+ outlet: The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.
+ routeConfig: The route configuration used for the route that contains the origin path.
+ parent: an ActivatedRoute that contains the information from the parent route when using child routes.
+ firstChild: contains the first ActivatedRoute in the list of child routes.
+ children: contains all the child routes activated under the current route.

```ts
import { Router, ActivatedRoute, Params } from '@angular/router';
```

```ts
// inside the component
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: HeroService
) {}

ngOnInit() {
  this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getHero(+params['id']))
    .subscribe((hero: Hero) => this.hero = hero);
}
```

## Snapshot: the no-observable alternative

```ts
let id = +this.route.snapshot.params['id'];
```

## Matrix URL

```
localhost:3000/heroes;id=15;foo=foo
```

## BrowserAnimationsModule? 

BrowserAnimationsModule?

## Route Guards

### kinds of guards

+ CanActivate
+ CanActivateChild()
+ CanDeactivate
* Resolve
+ CanLoad

---

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