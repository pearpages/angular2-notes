# Reflective Injector

One important thing to notice is that will inject a **singleton instance** of the class.

It is a concret implementation of *Injector* that uses *reflection* to look up the proper parameter types.

+ the service being injected
+ injecting the service

## The Service being injected

```typescript
class MyService {
    getValue(): string {
        return 'a value';
    }
}
```

## Injecting the service

```typescript
@Component({
    selector: 'di-sample-app',
    template: `
    <button (click)="invokeService()">Get value</button>
    `
})
class DiSampleApp {
    myService: MyService;

    constructor() {
        let injector: any = 
        ReflectiveInjector.resolveAndCreate([MyService]);
        this.myService = injector.get(MyService);
        console.log('Same Instance?', this.myService === injector.get(MyService));
    }

    invokeServie(): void {
        console.log('MyService returned', this.myService.getValue());
    }
}
```