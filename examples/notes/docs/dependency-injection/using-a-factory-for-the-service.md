# Using a factory for the service

So we can configure the service if necessary before it gets executed.

```typescript
{
    provide: MyComponent,
    useFactory: () => {
        if(loggedIn) {
            return new MyLoggedComponent(user);
        }
        return new MyComponent();
    },
    deps: [User]
}
```

```typescript
@NgModule({
    declarations: [DiSampleApp],
    imports: [BrowserModule],
    bootstrap: [DiSampleApp],
    providers: [
        SimpleService, // is the same than writing: { provide: SimpleService, useClass: SimpleService }
        {
            provide: ParamService,
            useFactory: () : ParamService => new ParamService('YOLO')
        }
    ]
})
class DiSampleAppModule {}

platformBrowserDynamic().bootstrapModule(DiSampleAppAppModule)
    .catach((err: any) ?> console.error(err));
```