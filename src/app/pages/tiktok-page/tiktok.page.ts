import { Component, computed, effect, inject } from '@angular/core';
import { QuestionService } from '../../services/question.services';
import { TikTokVideoComponent } from '../../components/tiktok-video/tiktok-video.components';
import { GameTypes } from '../../interfaces/GameTypes.enum';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.components';

@Component({
  selector: 'app-tiktok-page',
  standalone: true,
  imports: [TikTokVideoComponent, ProgressSpinnerModule, MenuBarComponent],
  template: `
    <div class="h-screen w-full">
      @if(questionService.isLoading() || questionService.error()){
      <div class="fixed inset-0 flex items-center justify-center bg-white z-50">
        <p-progress-spinner
          class="align-middle self-center"
          ariaLabel="loading"
        />
      </div>
      } @else{

      <div class="h-screen w-full max-h-screen flex flex-col">
        <app-menu-bar />
        <div class="p-4 flex-1">
          <div class="h-full w-full rounded-xl overflow-hidden">
            <app-tiktok-video
              [question]="questions()[currentVideoIndex]"
              (answerSubmitted)="onAnswerSubmitted()"
            />
          </div>
        </div>
      </div>
      }
    </div>
  `,
})
export class TiktokPageComponent {
  public currentVideoIndex = 0;
  public questionService = inject(QuestionService);
  public questions = computed(() => this.questionService.items());

  constructor() {
    this.questionService.loadByGameType(GameTypes.TikTok);
    effect(() => {
      console.log(this.questions());
    });
  }

  onAnswerSubmitted() {
    this.nextVideo();
  }

  private nextVideo() {
    if (this.currentVideoIndex < this.questions().length - 1) {
      this.currentVideoIndex++;
    }
  }
}
