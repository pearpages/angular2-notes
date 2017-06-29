# Angular Material

## Use

### Install

```bash
npm install --save @angular/material
npm install --save @angular/animations
```

### Import

It's a really good practice to use a **SharedModule** where you import all these components so they can be shared accross the application.

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdToolbarModule, MdButtonModule,
  MdIconModule, MdSelectModule, MdCardModule, MdSidenavModule, MdInputModule } from '@angular/material';
```

### Theme

```html
<link href="../node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">
```

or if using webpack import in the styles.scss

```css
@import '../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
```

### Icons

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

