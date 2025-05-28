import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem, CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  quantities = [1, 2, 3, 4, 5, 6];


  constructor(private cartService: CartService){}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      console.log(this.cartItems);
    });
  }
  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  
  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
  increaseQty(id: number) {
    this.cartService.increaseQuantity(id);
  }

  onQuantityChange(productId: number, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const qty = parseInt(selectElement.value, 10);
    this.cartService.updateQuantity(productId, qty);
  }
  proceedToPayment() {
    // Calculate total amount (sum of price * quantity)
    const totalAmount = this.totalPrice();

    // Build product-quantity concatenated string
     let productQuantityStr = this.cartItems
      .map(item => `${item.name}-Quantity-${item.quantity}`)
      .join('; ');
    if(this.cartItems.length === 0){
      productQuantityStr = 'No items in cart';
    }
    // Base Google Form URL (your form link here)
   // https://docs.google.com/forms/d/e/1FAIpQLSeDy_LEXPvnkAUj0ts5K7AgIJfbgz_IMJGlpmY-gbhsfxtV9A/viewform?usp=pp_url&entry.304941538=0&entry.1715663051=cart+is+empty
    const baseFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeDy_LEXPvnkAUj0ts5K7AgIJfbgz_IMJGlpmY-gbhsfxtV9A/viewform?usp=pp_url';

    // Create URLSearchParams to encode parameters
    const params = new URLSearchParams();
    params.append('entry.1715663051', totalAmount.toString());          // amount field
    params.append('entry.304941538', productQuantityStr);              // product-quantity field

    // Final URL with pre-filled params
    const finalUrl = `${baseFormUrl}&${params.toString()}`;

    // Redirect user to the Google Form
    window.location.href = finalUrl;
  }
}
