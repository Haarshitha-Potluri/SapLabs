import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  }
}

