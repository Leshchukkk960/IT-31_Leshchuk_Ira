import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  shopName = 'Мій Інтернет-магазин';
}