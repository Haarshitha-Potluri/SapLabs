
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];
  selectedPayment: string = '';

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart$.subscribe(items => {

      this.cartItems = items.map(item => ({ ...item, quantity: item.quantity || 1 }));
    });
  }

  increaseQuantity(index: number) {
    const newQty = this.cartItems[index].quantity + 1;
    this.cartService.updateQuantity(index, newQty);
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      const newQty = this.cartItems[index].quantity - 1;
      this.cartService.updateQuantity(index, newQty);
    }
  }


  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  selectPayment(method: string) {
    this.selectedPayment = method;
    this.cartService.setPaymentMethod(method); // <-- store in service
  }

  placeOrder() {
    if (!this.selectedPayment) {
      alert('Please select a payment method!');
      return;
    }

    this.router.navigate(['/order-success']);
  }
}
