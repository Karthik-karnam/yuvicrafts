import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
