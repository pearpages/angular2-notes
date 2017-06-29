# Routing

## Really Important Tricky Things

For exact routes. In case of more than one link being highlighted: 

```html
<a routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" routerLink="">Home</a>
```