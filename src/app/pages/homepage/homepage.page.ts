import { Component, inject } from '@angular/core';
import { QuizzCardGridComponent } from '../../components/quizz-card-grid/quizz-card-grid.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.components';
import { DidYouKnowCardComponent } from '../../components/did-you-know-card/did-you-know-card.component';
import { FactService } from '../../services/fact.service';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [QuizzCardGridComponent, MenuBarComponent, DidYouKnowCardComponent],
  template: `
    <div class="pb-4">
      <app-menu-bar />
      <div class="px-4 flex flex-col gap-4">
        <app-quizz-card-grid containerClass="mt-6" />
        <app-did-you-know-card 
          [text]="fact" 
          [startColor]="'#FF0099'" 
          [endColor]="'#FF4D00'" 
          [gradientAngle]="45"
        />
        <button class="bg-blue-500 text-white w-full px-4 py-2 rounded-full" (click)="nextFact()">Une autre astuce ?</button>

      </div>
    </div>
  `,
  styles: []
})
export class HomepagePageComponent {
  factService = inject(FactService);

  fact = this.factService.getRandomFact();

  nextFact() {
    this.fact = this.factService.getRandomFact();
  }
}
