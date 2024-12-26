import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  profileImage = 'assets/images/favicon.ico';
  name = 'WALID BOUWACHMA';
  title = 'DÉVELOPPEUR FULLSTACK';
  profile = `I’m a Fullstack Developer specializing in the Java/Angular stack, with a proven track record in building high-performance, scalable web applications. Driven by a passion for clean code and innovative solutions, I thrive on tackling challenges and turning ideas into seamless user experiences.`;
  profile2= ` Let’s connect and create something extraordinary together!`;
  skills = [
    'HTML/CSS', 'JavaScript', 'Angular', 'Spring Framework',
    'Git', 'SQL', 'Docker', 'Java'
  ];
  
  languages = ['Arabe', 'Anglais', 'Français'];
  
  qualities = [
    'Capacité à travailler sous pression',
    'Esprit d\'équipe, adaptabilité et autonomie',
    'Excellentes compétences en résolution de problèmes',
    'Forte capacité à gérer plusieurs tâches'
  ];

  experiences = [
    {
      title: 'Développeur fullstack',
      company: 'Noza Academy',
      period: 'Avr 2022 - Juin 2022',
      location: 'Marrakech',
      description: 'Projet: Plateforme de vente de voitures'
    }
  ];

  projects = [
    {
      name: 'ft_transcedence',
      description: 'Projet de réseau social incluant un chat en temps réel'
    },
    {
      name: 'Booking Services',
      description: 'Application web développée avec Angular, Spring, MySQL'
    },
    {
      name: 'Hsabati',
      description: 'Application web de suivi des dépenses'
    }
  ];

  contact = {
    address: 'Benguerir, Morocco',
    phone: '+212 650301763',
    email: 'bouwachmawalid1@gmail.com'
  };
}
