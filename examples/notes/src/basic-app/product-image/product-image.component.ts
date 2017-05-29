import {Component} from '@angular/core';
import {Product} from '../models/product';

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    template: `
    <image class="product-image" [src]="product.imageUrl">
    `
})
export class ProductImageComponent {
    product: Product;
}