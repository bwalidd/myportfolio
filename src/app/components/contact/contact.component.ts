import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    address: 'Benguerir, Morocco',
    phone: '+212 650301763',
    email: 'bouwachmawalid1@gmail.com'
  };
}
