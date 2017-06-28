# Pipes

```typescript
<p>{{ passenger | json }}</p>

<div class="date">
  {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMM' | uppercase) : 'Not checked in' }}
</div>
```