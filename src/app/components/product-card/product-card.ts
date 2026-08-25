import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';

  @Output() buy = new EventEmitter<string>();

  buyProduct(): void {
    this.buy.emit(this.name);
  }
}