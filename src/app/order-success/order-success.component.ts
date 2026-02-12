
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  orderItems: any[] = [];
  totalAmount = 0;
  orderId: string = '';
  orderTime: string = '';
  paymentMethod: string = '';

  constructor(private cartService: CartService) {
    this.orderItems = [...this.cartService.getCurrentItems()];
    this.totalAmount = this.orderItems.reduce((sum, item) => sum + item.price, 0);
    this.orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    this.orderTime = new Date().toLocaleString();
    this.paymentMethod = this.cartService.getPaymentMethod() || 'Not selected';
    this.cartService.clearCart();
  }
}
