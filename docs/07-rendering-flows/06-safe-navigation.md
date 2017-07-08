# Safe Navigation Operator (Elvis operator)

```typescript
interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: ? Child[] | null
}
```

```html
<div class="children">
  Children: {{ passenger?.children?.length || 0 }}
</div>
```