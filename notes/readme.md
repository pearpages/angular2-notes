# docs

## Questions

- when do we *export* and when we don't

Angular has a syntax feature called **template reference variables**. These variables grant us direct access to an element. We declare a template reference variable by preceding an identifier with a hash/pound character (#).

## ngModule

With ngModule we do not need to use **directives** in the @Component and we do not need to do imports for anything in the **import** section of the @NgModule.

The same goes for providers.

## Host

Host lets you write css classes to the external container of your component.

## Routing 

Now we can navigate without the use of the #tag because we can use *history.pushState* in HTML5.

**In angular1**

```javascript
$locationProvider.html5Mode(true);
```



