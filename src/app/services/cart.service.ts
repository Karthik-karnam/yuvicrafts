import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: Product) {
    const items = this.cartItems.value;
    const index = items.findIndex(item => item.id === product.id);

    if (index !== -1) {
      // Item exists, increase quantity
      items[index].quantity += 1;
    } else {
      // New item, add with quantity 1
      items.push({ ...product, quantity: 1 });
    }
    this.cartItems.next([...items]);
  }

  getCartItems(): Product[] {
    return this.cartItems.value;
  }

  clearCart() {
    this.cartItems.next([]);
  }

  removeFromCart(productId: number) {
    const items = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(items);
  }

  decreaseQuantity(productId: number) {
    const items = this.cartItems.value;
    const index = items.findIndex(item => item.id === productId);

    if (index !== -1) {
      if (items[index].quantity > 1) {
        items[index].quantity -= 1;
        this.cartItems.next([...items]);
      } else {
        // Remove if quantity reaches zero
        this.removeFromCart(productId);
      }
    }
  }
  increaseQuantity(productId: number) {
    const items = this.cartItems.value;
    const index = items.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      items[index].quantity += 1;
      this.cartItems.next([...items]);
    }
  }
  updateQuantity(productId: number, quantity: number) {
    const items = this.cartItems.value;
    const index = items.findIndex(item => item.id === productId);
  
    if (index !== -1 && quantity > 0) {
      items[index].quantity = quantity;
      this.cartItems.next([...items]);
    } else if (quantity === 0) {
      // If zero quantity is allowed, remove item from cart
      this.removeFromCart(productId);
    }
  }
  
  
}
