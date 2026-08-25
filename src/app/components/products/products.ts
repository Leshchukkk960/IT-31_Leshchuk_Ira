import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productName = 'Ноутбук ASUS';
  productPrice = 25000;
  productDescription = 'Потужний ноутбук для навчання, роботи та відпочинку.';

  onBuy(productName: string): void {
    alert(`Товар додано до кошика: ${productName}`);
  }
}