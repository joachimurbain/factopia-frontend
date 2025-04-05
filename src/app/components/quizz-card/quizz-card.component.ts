import { Component, input } from "@angular/core";
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
@Component({
    selector: 'app-quizz-card',
    template: `
    <a [href]="url()">
        <p-card styleClass="aspect-square flex justify-center items-center shadow-md">
            <span class="text-xl text-center">
                {{ name() }}
            </span>
        </p-card>
    </a>
    `,
    imports: [CardModule, StyleClassModule],
    styles: []
})
export class QuizzCardComponent {
    name = input.required<string>(); 
    url = input.required<string>();
}
