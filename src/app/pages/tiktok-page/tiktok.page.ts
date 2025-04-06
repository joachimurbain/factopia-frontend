import { Component, computed, effect, inject, OnInit } from '@angular/core';
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
            (answerSubmitted)="onAnswerSubmitted()" />
        </div>
      </div>
    </div>
      }
    </div>
  `,
})
export class TiktokPageComponent implements OnInit {
  public currentVideoIndex = 0;
  public questionService = inject(QuestionService);

  ngOnInit(): void {
    // this.questionService.getAllVideos().subscribe((videos) => {
    //   this.videos = videos;
    // });
  }

  // onAnswerSubmitted() {
  //   this.nextVideo();
  // }
  public questions = computed(() => this.questionService.items());

  // public questions = computed(() => {
  //   return [
  //       {
  //           id: 1,
  //           content: "Regarde et decide si c'est vrai",
  //           gameType: {
  //               id: 1,
  //               title: "TikTok",
  //               description: "Regarde la video ensuite, swipe a droite si c'est vrai !"
  //           },
  //           resource: {
  //               id: 1,
  //               name: "A_1.mp4",
  //               path: "/videos/A_1.mp4",
  //               resourceType: ResourceType.video,
  //               isCorrect: false,
  //               questionId: 1
  //           },
  //           answer: {
  //               id: 1,
  //               content: "This video is fake",
  //               isCorrect: false,
  //               questionId: 1
  //           }
  //       },
  //       {
  //           id: 2,
  //           content: "Est-ce que cette vidéo est authentique?",
  //           gameType: {
  //               id: 1,
  //               title: "TikTok",
  //               description: "Regarde la video ensuite, swipe a droite si c'est vrai !"
  //           },
  //           resource: {
  //               id: 2,
  //               name: "A_2.mp4",
  //               path: "/videos/A_2.mp4",
  //               resourceType: ResourceType.video,
  //               isCorrect: true,
  //               questionId: 2
  //           },
  //           answer: {
  //               id: 2,
  //               content: "This video is real",
  //               isCorrect: true,
  //               questionId: 2
  //           }
  //       }
  //   ] as Question[];
  // });

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
