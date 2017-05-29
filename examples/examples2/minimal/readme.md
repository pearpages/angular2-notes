```html
<button (click)="onClick()">Update</button>
```

```typescript
onClick() {

}
```

```typescript
constructor() {
    Observable.fromEvent($element, 'click');
}
```