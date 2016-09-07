# Dependency Injection (DI)

+ Advantages
+ mocking Example
+ DI parts

> Is a replacement for the *new* operator.

> This technique of injecting the dependencies relies on a principle called the **Inversion of Control** 

## Advantages

- mocking
- share a single instance - Singleton pattern
- a new instance - Factory pattern

## Mocking Example

```typescript
let product;

beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service,11);
});
```

## DI parts

+ Provider (aka binding)
+ Injector
+ Dependency

### Provider

It maps a *token* (string or class) to a list of dependencies. It tells Angular how to create an object, given a token.

### Injector

It holds a set of bindings and is responsible for resolving dependencies and injecting them when creating objects.

### Dependency

What's being injected.

