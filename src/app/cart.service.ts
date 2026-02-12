

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>([]);
  cart$ = this.cartItems.asObservable();

  private paymentMethod: string = '';

  constructor() { }

  addToCart(item: any) {
    const current = this.cartItems.getValue();
    this.cartItems.next([...current, item]);
  }

  removeFromCart(index: number) {
    const current = this.cartItems.getValue();
    current.splice(index, 1);
    this.cartItems.next([...current]);
  }

  clearCart() {
    this.cartItems.next([]);
    this.paymentMethod = '';
  }

  getCurrentItems(): any[] {
    return this.cartItems.getValue();
  }

  setPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  getPaymentMethod(): string {
    return this.paymentMethod;
  }

  updateQuantity(index: number, quantity: number) {
    const current = this.cartItems.getValue();
    current[index].quantity = quantity;
    this.cartItems.next([...current]);
  }

}
