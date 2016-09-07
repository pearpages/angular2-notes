# Defining base-href

+ in the html
+ programmatically

## In the HTML

```html
<head>
    <base href="/">
</head>
```

## Programmatically

```typescript
{provide: APP_BASE_HREF, useValue: '/' }
``` 

or in the whole context

```typescript
@NgModule({
    declarations: [RoutesDemoApp],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes) // routes
    ],
    bootsrap: [RoutesDemoApp],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/' } // <-- HERE
    ]
})
```