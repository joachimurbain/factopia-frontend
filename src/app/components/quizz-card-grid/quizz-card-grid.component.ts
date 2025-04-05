import { Component } from "@angular/core";
import { QuizzCardComponent } from "../quizz-card/quizz-card.component";
@Component({
    selector: 'app-quizz-card-grid',
    imports: [QuizzCardComponent],
    template: `
    <div class="grid grid-cols-2 gap-4">
        @for (quizzItem of quizz; track $index) {
            <app-quizz-card [name]="quizzItem.name" [url]="quizzItem.url" />
        }
    </div>
    `,
    styles: ``
})
export class QuizzCardGridComponent {
    quizz : Array<QuizzCard> = [
        {
            name: "Shorts",
            url: "/shorts"
        },
        {
            name: "Choix multiple",
            url: "#"
        },
        {
            name: "Vrai ou faux",
            url: "#"
        },
        {
            name: "Mots à trous",
            url: "#"
        },
    ]

}
interface QuizzCard {
    name: string;
    url: string;
}