# Inerpolation Expressions

```typescript
@Component({
  selector: 'my-comp1',
  template: `
  <div>
   {{ numberOne + numberTwo }}
   <!-- it's going to be: 3 -->
  </div>

  {{ isHappy? : ':)' : ':(' }}
  <!-- it's going to be: :) -->
  `
})
export class MyComponent1 {
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
}
```