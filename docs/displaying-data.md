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