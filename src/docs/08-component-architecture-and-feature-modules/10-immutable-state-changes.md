# Immutable State Changes

```typescript
handleRemove(event: Passenger) {
  this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
}

handleEdit(event: Passenger) {
  this.passengers = this.passengers.map((passenger: Passenger) => {
    if (passenger.id == event.id) {
      passenger = {
        ...event
      }
    }
    return passenger;
  });
}
```