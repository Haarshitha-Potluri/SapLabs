import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  dob: string = '';
  age: number | null = null;
  phone: string = '';
  address: string = '';
  gender: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  calculateAge() {
    if (this.dob) {
      const birthDate = new Date(this.dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      this.age = calculatedAge;
    } else {
      this.age = null;
    }
  }

  onRegister(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert(`Registration successful!
Name: ${this.firstName} ${this.lastName}
Email: ${this.email}
Age: ${this.age}
Phone: ${this.phone}
Address: ${this.address}
Gender: ${this.gender}`);

    this.router.navigate(['/login']);
  }
}
