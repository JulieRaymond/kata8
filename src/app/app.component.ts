import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {MeteoComponent} from "./meteo/meteo.component";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, MeteoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Produits';

  products: Array<Product> = [
    {id: 1, name: "Smartphone XY", category: "Électronique", price: 799.99, rating: 4.6},
    {id: 2, name: "Basketball Pro Ball", category: "Sport", price: 29.99, rating: 4.2},
    {id: 3, name: "Casque Audio Sans Fil", category: "Électronique", price: 199.99, rating: 4.8},
    {id: 4, name: "Série de Romans Fantasy", category: "Livres", price: 59.99, rating: 4.5},
    {id: 5, name: "Montre Connectée", category: "Électronique", price: 249.99, rating: 4.4},
  ];

  allProducts: Array<Product>;

  constructor() {
    this.allProducts = [...this.products];
  }

  sortByRating() {
    this.products = this.products.sort((a, b) => b.rating - a.rating);
  }

  filterByCategory(event: any) {
    const categoryName = event.target.value;
    if (categoryName === '') {
      this.products = [...this.allProducts];
    } else {
      this.products = this.allProducts.filter(product => product.category === categoryName);
    }
  }

  uniqueCategories(): Array<string> {
    const categoriesSet = new Set<string>();
    this.products.forEach(product => categoriesSet.add(product.category));
    return Array.from(categoriesSet);
  }
}
