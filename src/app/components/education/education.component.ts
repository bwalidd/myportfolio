import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'IT solutions Designer and Developer',
      school: '1337 UM6P',
      period: 'Oct 2022 - Présent',
      location: 'Benguerir',
      description: `Acquisition de compétences en programmation, algorithmes et développement
      logiciel à travers des projets pratiques. Renforcement de l'adaptabilité et du travail
      en équipe dans un environnement collaboratif et auto-géré.`
    },
    {
      degree: 'DUT',
      school: 'École Supérieure de Technologie, Université Chouaïb Doukkali',
      period: 'Oct 2020 - Juin 2022',
      location: 'El Jadida',
      description: `Formation en informatique centrée sur le développement logiciel, bases de
      données, réseaux, avec compétences en Java, Python, et projets web/desktop.`
    }
  ];
}
