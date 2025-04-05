import { Component } from '@angular/core';
import { QuizzCardGridComponent } from '../../components/quizz-card-grid/quizz-card-grid.component';

@Component({
  selector: 'app-homepage',
  imports: [QuizzCardGridComponent],
  template: `
    <div class="px-4">
      <app-quizz-card-grid />
    </div>
  `,
  styles: [`
  `]
})
export class HomepagePageComponent {

}
