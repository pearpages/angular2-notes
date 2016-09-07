# Built-in Components

## NgIf

> The element gets removed of the DOM if the expression is false.

But if we want to just hide whe need to use **ng_style** or [style.display]="'none'".

```html
<div *ngIf="a > b"></div>

<div *ngIf="str === 'yes'"></div>
```

## NgSwitch

```html
<div class="container">
    <div *ngIf="myVar == 'A'">Var is A</div>
    <div *ngIf="myVar == 'B'">Var is B</div>
    <div *ngIf="myVar != 'A' && myVar != 'B'">Var is something else</div>
</div>
```

vs

```html
<div class="container" [ngSwitch]="myVar">
    <div *ngSwitchCase="'A'">Var is A</div>
    <div *ngSwitchCase="'B'">Var is B</div>
    <div *ngSwitchCase="'C'">Var is C</div>
    <div *ngSwitchDefault>Var is something else</div>
</div>
```

## NgStyle

> You can set a given DOM element CSS properties from Angular expressions.

```html
<div [style.display]="'none'" ></div>
<div [style.background-color]="'yellow'"></div>
```

```html
<div [ngStyle]="{color: 'white', 'background-color': 'blue'}"></div> <!-- the dash character isn't allowed in an object key -->
```

## NgClass

```html
<div [ngClass]="{bordered: isBordered()}"></div> <!-- must return a boolean -->
<div [ngClass]="['blue','round','correct']"></div>
```

## NgFor

```html
<div *ngFor="let c of cities">
    <div class="item">{{c}}</div>
</div>
```

```html
<div class="ui list" *ngFor="let c of cities; let num = index">
    <div class="item">{{num+1}} - {{c}}</div>
</div>
```

## NgNonBindable

```html
<div>
    <span class="bordered">{{content}}</span>
    <pre ngNonBindable>
        This is what {{ content }} rendered
    <pre>
</div>
```