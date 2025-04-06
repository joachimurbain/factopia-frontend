import { Component, input } from '@angular/core';
import { QuizzCardComponent } from '../quizz-card/quizz-card.component';

@Component({
  selector: 'app-quizz-card-grid',
  imports: [QuizzCardComponent],
  template: `
    <div class="w-full">
      <div
        [class]="containerClass()"
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto"
      >
        @for (quizzItem of quizz; track $index) {
            <app-quizz-card
                [name]="quizzItem.name"
                [url]="quizzItem.url"
                [icon]="quizzItem.icon"
                [startColor]="quizzItem.gradient.startColor"
                [endColor]="quizzItem.gradient.endColor"
                [gradientAngle]="quizzItem.gradient.angle"
            />
        }
      </div>
    </div>
  `,
  standalone: true,
})
export class QuizzCardGridComponent {
  containerClass = input<string>('');

  quizz: Array<QuizzCard> = [
    {
      name: 'Tiktok',
      url: '/tiktok',
      icon: 'pi pi-play',
      gradient: {
        startColor: '#FF0099', // Pink
        endColor: '#FF4D00', // Orange
        angle: 45,
      },
    },
    {
      name: 'Choix multiple',
      url: '/multiple-choice',
      icon: 'pi pi-list',
      gradient: {
        startColor: '#6366F1', // Indigo
        endColor: '#8B5CF6', // Purple
        angle: 45,
      },
    },
    {
      name: 'Vrai ou faux',
      url: '/true-false',
      icon: 'pi pi-check-square', // Added a suitable icon for true/false
      gradient: {
        startColor: '#059669', // Emerald
        endColor: '#10B981', // Green
        angle: 45,
      },
    },
    {
      name: 'Mots à trous',
      url: '/fill-blanks',
      icon: 'pi pi-pencil',
      gradient: {
        startColor: '#3B82F6', // Blue
        endColor: '#06B6D4', // Cyan
        angle: 45,
      },
    },
  ];
}

interface QuizzCard {
    name: string;
    url: string;
    icon: string;
    gradient: {
        startColor: string;
        endColor: string;
        angle: number;
    }
}
