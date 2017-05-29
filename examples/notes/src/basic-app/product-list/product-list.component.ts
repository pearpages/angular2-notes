import {Product} from '../models/Product';
import {ProductRowComponent} from '../product-row/product-row.component';
import {EventEmitter,Component} from '@angular/core';

@Component({
    selector: 'product-list',
    inputs: ['proudctList'],
    outputs: ['onProductSelected'],
    template: `
    <div class="ui items">
        <product-row 
        *ngFor="let myProduct of productList"
        [product]='myProduct'
        (click)='clicked(myProduct)'
        [class.selected]='isSelected(myProduct)'
        >
        <product-row>
    </div>
    `
})
export class ProductListComponent {
    /**
     * @input productList - the Product[] passed to us
     */
    productList: Product[];

    /**
     * @output onProductSelected - outputs the current Product whenever a new product is selected
     */
    onProductSelected: EventEmitter<Product>;
    
    /**
     * @property currentProduct - local state containing the currently selected `Product`
     */
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    clicked(product:Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product:Product):boolean {
        if(!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}