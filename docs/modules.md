# Modules

+ Basic Modules
+ JIT vs AOT
+ Feature Modules vs Root Module
+ Lazy-loading modules with  the router

---

## Basic Modules

+ CommonModule (ngFor, ngIf, ...)
+ FormsModule
+ RouterModule

---

## JIT vs AOT

```typescript
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
```

```typescript
// The browser platform without a compiler
import { platformBrowser } from '@angular/platform-browser';

// The app module factory produced by the static offline compiler
import { AppModuleNgFactory } from './app/app.module.ngfactory';

// Launch with the app module factory.
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

### Summarizing

```typescript
platformBrowserDynamic().bootstrapModule(AppModule);
// vs
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

---

## Feature Modules vs Root Module

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

```ts
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
 
import { AwesomePipe }        from './awesome.pipe';
 
import
       { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { HighlightDirective } from './highlight.directive';
 
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
```

---

## Lazy-loading modules with the router

### app-routing.module.ts

> A lazy-loaded module location is a string, not a type. In this app, the string identifies both the module file and the module class, the latter separated from the former by a #.

```ts
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### RouterModule.forRoot

> The forRoot static class method of the RouterModule with the provided configuration and added to the imports array provides the routing concerns for the module.

