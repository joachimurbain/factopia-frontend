import { Component } from '@angular/core';
import { QuizzCardGridComponent } from '../../components/quizz-card-grid/quizz-card-grid.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.components';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [QuizzCardGridComponent, MenuBarComponent],
  template: `
    <div>
      <app-menu-bar />
      <div class="px-4 flex-grow">
        <app-quizz-card-grid />
      </div>
    </div>
  `,
  styles: []
})
export class HomepagePageComponent {
}
