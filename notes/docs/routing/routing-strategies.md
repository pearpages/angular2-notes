# Routing Strategies

> The way that Angular application parses and creates paths from and route definitions is now *location strategy*

(In angular1 is called *routing modes*)

+ PathLocationStrategy -> HTML5
+ HasLocationStrategy -> #

## Important

> In order to use HTML5 mode routing, you have to configure your server to redirect eery "missing" route to the root URL.

## Usage

```typescript
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]
```