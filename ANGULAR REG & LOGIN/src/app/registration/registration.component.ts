import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  age: number | null = null;

  captchaText: string = this.generateCaptcha();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      captcha: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  generateCaptcha(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  refreshCaptcha() {
    this.captchaText = this.generateCaptcha();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  calculateAge() {
    const dobValue = this.registerForm.get('dob')?.value;
    if (!dobValue) return;

    const today = new Date();
    const dob = new Date(dobValue);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    this.age = age;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Please fill all fields correctly');
      return;
    }

    if (this.registerForm.get('captcha')?.value !== this.captchaText) {
      alert('Captcha is incorrect');
      this.refreshCaptcha();
      return;
    }

    alert('Registration successful');
    console.log(this.registerForm.value);
    this.onReset();
  }

  onReset() {
    this.registerForm.reset();
    this.age = null;
    this.refreshCaptcha();
  }
}
