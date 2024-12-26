import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Développeur fullstack',
      company: 'Noza Academy',
      period: 'Avr 2022 - Juin 2022',
      location: 'Marrakech',
      description: `Projet: Plateforme de vente de voitures
      Application web Django pour gérer les annonces, avec ajout, recherche, filtres
      dynamiques, affichage détaillé et design responsive.`
    }
  ];
}
