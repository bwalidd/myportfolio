import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'ft_transcedence',
      description: `Projet de réseau social incluant un chat en temps réel et un jeu de ping-pong
      multijoueur entre utilisateurs. Développé avec JavaScript, Django, PostgreSQL,
      Docker et Nginx.`
    },
    {
      name: 'Booking Services',
      description: `Application web développée avec Angular, Spring, MySQL et Spring Security. Elle permet
      aux entreprises et aux utilisateurs de conclure des accords pour des services à une date précise et à un
      montant défini. Le système assure la sécurité des données et facilite la gestion des réservations.`
    },
    {
      name: 'Hsabati (Suivi des dépenses)',
      description: `Application web utilisant Angular, Spring et MySQL. Elle permet
      aux utilisateurs de suivre leurs dépenses et profits provenant de différents emplois.`
    }
  ];
}
