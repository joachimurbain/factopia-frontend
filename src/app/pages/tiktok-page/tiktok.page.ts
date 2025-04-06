import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.services';
import { TikTokVideoComponent } from '../../components/tiktok-video/tiktok-video.components';
import { GameTypes } from '../../interfaces/GameTypes.enum';
import { Question } from '../../services/question.model';
import { ResourceType } from '../../services/resource.model';
@Component({
  selector: 'app-tiktok-page',
  standalone: true,
  imports: [TikTokVideoComponent],
  template: `
    <div class="h-screen w-full">
      <app-tiktok-video
        [question]="questions()[currentVideoIndex]"
        (answerSubmitted)="onAnswerSubmitted()"
      />
    </div>
  `,
})
export class TiktokPageComponent implements OnInit {
  public videos: string[] = [];
  public currentVideoIndex = 0;
  public questionService = inject(QuestionService);

  get currentVideo(): string {
    return this.videos[this.currentVideoIndex];
  }

  ngOnInit(): void {
    // this.questionService.getAllVideos().subscribe((videos) => {
    //   this.videos = videos;
    // });
  }

  // onAnswerSubmitted() {
  //     this.nextVideo();
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
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    }
    console.log('Next video:', this.currentVideo);
  }
}
