import { Component, input } from "@angular/core";
import { QuizzCardComponent } from "../quizz-card/quizz-card.component";

@Component({
    selector: 'app-quizz-card-grid',
    imports: [QuizzCardComponent],
    template: `
    <div [class]="containerClass()" class="grid grid-cols-2 gap-4">
        @for (quizzItem of quizz; track $index) {
            <app-quizz-card 
                [name]="quizzItem.name" 
                [url]="quizzItem.url"
                [startColor]="quizzItem.gradient.startColor"
                [endColor]="quizzItem.gradient.endColor"
                [gradientAngle]="quizzItem.gradient.angle"
            />
        }
    </div>
    `,
    standalone: true
})
export class QuizzCardGridComponent {
    containerClass = input<string>('');

    quizz: Array<QuizzCard> = [
        {
            name: "Shorts",
            url: "/shorts",
            gradient: {
                startColor: "#FF0099",  // Pink
                endColor: "#FF4D00",    // Orange
                angle: 45
            }
        },
        {
            name: "Choix multiple",
            url: "#",
            gradient: {
                startColor: "#6366F1",  // Indigo
                endColor: "#8B5CF6",    // Purple
                angle: 45
            }
        },
        {
            name: "Vrai ou faux",
            url: "#",
            gradient: {
                startColor: "#059669",  // Emerald
                endColor: "#10B981",    // Green
                angle: 45
            }
        },
        {
            name: "Mots à trous",
            url: "#",
            gradient: {
                startColor: "#3B82F6",  // Blue
                endColor: "#06B6D4",    // Cyan
                angle: 45
            }
        },
    ]
}

interface QuizzCard {
    name: string;
    url: string;
    gradient: {
        startColor: string;
        endColor: string;
        angle: number;
    }
}