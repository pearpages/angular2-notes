# Route Parameters

```typescript
const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'artists/:id', component: ArtistComponent },
    { path: 'tracks/:id', component: TrackComponent },
    { path: 'albums/:id', component: AlbumComponent }
];
```

## Access Params in the component

```typescript
import { ActivatedRoute } from '@angular/router';

/**
* Considering we have this route 'articles/:id'
*/

// ...
export class ArticleComponent {
    id: string;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {this.id = params['id']});
    }
}
```

## Link in the View

```html
<a [routerLink]="['/albums',t.album.id]">{{t.album.name}}</a>
```

## Performing redirection inside the component

Example after submitting a form. All the code inside the same component. 

```typescript
submit(query: string): void {
    this.router.navigate(['search'], {queryParams: {query: query}})
    .then( _ => this.search());
}
```