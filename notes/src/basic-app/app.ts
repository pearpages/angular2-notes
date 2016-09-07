import {NgModule} from '@angular/core';
import {InventoryApp} from './inventoryApp';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {PriceDisplayComponent} from './price-display/price-display.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductListComponent} from './product-list/product-list.component';
import {BrowserModule}  from '@angular/platform-browser';

@NgModule({
    declarations: [
        InventoryApp,
        ProductImageComponent,
        ProductDepartmentComponent,
        PriceDisplayComponent,
        ProductRowComponent,
        ProductListComponent
    ],
    imports: [BrowserModule],
    bootstrap: [InventoryApp]
})
class InventoryAppModule() {}
platformBrowserDynamic().bootstrapModule(InventoryAppModule);