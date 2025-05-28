import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import productsData from '../../../assets/products.json';
@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] =[];
  addedMessage = '';
  messageTimeout: any;

  constructor(private http: HttpClient, private cartService: CartService) { }


  ngOnInit() {
    this.products = productsData;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showAddedMessage(`${product.name} added to cart!`);
  }

  showAddedMessage(msg: string) {
    this.addedMessage = msg;
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    this.messageTimeout = setTimeout(() => {
      this.addedMessage = '';
    }, 3000); // message disappears after 3 seconds
  }

}
