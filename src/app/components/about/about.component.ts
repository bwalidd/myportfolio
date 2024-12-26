import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  profile = `Développeur Fullstack passionné, spécialisé en Java/Angular stack, avec une solide
  expérience dans le développement d'applications web performantes. Maîtrise des
  technologies backend et frontend pour offrir des solutions innovantes et de qualité.`;

}
