# Nested Routes

- Parent Routes with children parameter 
- Nested Routes
  - Routes
  - View

## Parent Routes with children parameter

```typescript
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: child: childRoutes }
];
```

## Nested Routes

### Routes

```typescript
export const routes: Routes = [
    { path: '', redirectTo: 'main' },
    { path: 'main', component: MainComponent },
    { path: ':id', component: ByIdComponent },
    { path: 'interest', component: InterestComponent},
    { path: 'sporstify', component: SporstifyComponent}
];
```

### View

Links are al in format './whatever'. This indicates that you want to navigate the Main route *relative to the current route context*.

```html
<a [routerLink]="['./main']">Main</a>
<a [routerLink]="['./interest']">Interest</a>
<a [routerLink]="['./sporstify']">Sporstify</a>
```

Another notation is valid, but it is not recommended because it is not relative.

```html
<!-- In this example products is the son, main is the father -->
<a [routerLink]="['products','main']">Interest</a>
```

### Template 

```html
<h2>Products</h2>

<div class="navLinks">
    <a [routerLink]="['./main']">Main</a> | 
    <a [routerLink]="['./interest']">Interest</a> |
    <a [routerLink]="['./sporstify']">Sporstify</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
</div>

<div class="products-area">
    <router-outlet></router-outlet>
</div>
```

In the component

```typescript
export class ProductsComponent {

    constructor(private router: Router, private route: ActivatedRoute) {}

    goToProduct(id:string): void {
        this.router.navigate(['./', id], {relativeTo: this.route});
    }
}
```
