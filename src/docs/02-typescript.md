# Typescript

Try to use **immutable** methods.

E.g.

```typescript
groceries = groceries.concat([item]); // instead of using push
groceries = groceries.filter((grocery) => grocery !== 'banana');
```

```typescript
class ShoppingList {

  groceries: Array<string>;
  
  constructor() {
    this.groceries = [];
  }

  addItem(item) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => grocery !== item);
  }
}

const myNewList = new ShoppingList();

myNewList.addItem('pizza');
myNewList.addItem('beer');

console.log(myNewList.groceries);
```

## Import and Exports

```typescript
export function uppercase(str: string) {
  return str.toUpperCase();
}
```

```typescript
import { uppercase } from './formatter';

console.log(uppercase('Pere'));
```