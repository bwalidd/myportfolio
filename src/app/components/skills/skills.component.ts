import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    'HTML/CSS', 'JavaScript', 'Angular', 'Spring Framework',
    'Git', 'SQL', 'Docker', 'Java'
  ];
  languages = ['Arabe', 'Anglais', 'Français'];
  qualities = [
    'Capacité à travailler sous pression',
    'Esprit d\'équipe, adaptabilité et autonomie',
    'Excellentes compétences en résolution de problèmes et prise de décision rapide',
    'Forte capacité à gérer plusieurs tâches simultanément et à respecter les délais'
  ];
}
