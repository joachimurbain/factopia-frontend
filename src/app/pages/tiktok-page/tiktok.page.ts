import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.services';
import { TikTokVideoComponent } from '../../components/tiktok-video/tiktok-video.components';
import { GameTypes } from '../../interfaces/GameTypes.enum';
@Component({
  selector: 'app-tiktok-page',
  standalone: true,
  imports: [TikTokVideoComponent],
  template: `
      <div class="h-screen w-full">
          <app-tiktok-video 
              [videoUrl]="currentVideo" 
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

  constructor() {
    this.questionService.loadByGameType(GameTypes.TikTok);
    effect(() => {
      console.log(this.questions());
    });
  }

  onAnswerSubmitted(isTrue: boolean) {
    console.log('Answer submitted:', isTrue);
    this.nextVideo();
  }

  private nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    }
    console.log('Next video:', this.currentVideo);
  }
}
