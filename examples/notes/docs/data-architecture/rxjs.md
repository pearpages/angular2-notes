# RxJs

## Subject

You can think of *Subject* as "read/write" stream.

> Technically a *Subject* inherits from both *Observable* and *Observer*.

## BehaviorSubject

One consequence of streams is that, because messages are published immediataley, a new subscriber risks missing the latest value of the stream. *BehaviorSubject* compensates for this.

## Get and Push an Object

### Get

```typescript
userService.subscribe((newUser) => {
    console.log('New User is: ', newUser.name);
})
```

### Push

```typescript
let u = new User('Naet','anyImgSrc');
// we use *next* metho on a *Subject* to push a new value to the stream
userService.currentUser.next(u);
```