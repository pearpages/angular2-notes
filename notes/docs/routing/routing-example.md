# Routing Example

## Components of Angular 2 Routing

+ Routes
+ RouterOutlet (directive)
+ RouterLink (directive)

## Example

Three routes

+ home
+ about
+ contact

```typescript
import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'contact', component: ContactComponent },
    {path: 'contactus', redirectTo: 'contact' }
];
@Component({
    selector: 'router-app',
    template: `
    <div>
        <nav>
            <a>Navigation:</a>
            <ul>
                <li><a [routerLink]="['home']">Home</a></li>
                <li><a [routerLink]="['about']">About</a></li>
                <li><a [routerLink]="['contact']">Contact us</a></li>
            </ul>
    </div>
    `
})
@NgModule({
    declarations: [
        RoutesDemoApp,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes); // routes
    ],
    bootstrap: [RoutesDemoApp],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
    .catch((err: any) => console.error(err));
```