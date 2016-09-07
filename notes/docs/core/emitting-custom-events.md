# Emitting Custom Events

> An *EventEmitter* is simply an object that helps you implement the **Observer Pattern**.

## Example

### The component the has an output

```typescript
@Component({
    selector: 'single-component',
    outputs: ['putRingOnIt'], // 1
    template: `<button (click)="liked()">Like it?</button>
    `
})
class SingleComponent {
    putRingOnIt: EventEmitter<string>; 

    constructor() {
        this.putRingOnIt = new EventEmitter(); // 2
    }

    liked(): void {
        this.putRingOnIt.emit("oh oh oh"); // 3
    }
}
```

### The parent that uses the component with the output

```typescript
@Component({
    selector: 'club',
    template: `
        <div>
            <single-component (putRingOnIt)="ringWasPlaced($event)">
            </single-component>
        </div>
    `
})
class ClubComponent {
    ringWasPlaced(message:string) {
        console.log(`Put your hands up: ${message}`);
    }
}
```
