import {
  Component,
  input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { QuizAnswerPageComponent } from '../quiz-answer-page/quiz-answer-page.component';
import { Question } from '../../services/question.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tiktok-video',
  standalone: true,
  imports: [QuizAnswerPageComponent],
  template: `
    <div class="w-full h-full">
      @if(showAnswerPage) {
      <app-quiz-answer-page
        [question]="question()"
        (answer)="onAnswer()"
        (replayVideo)="replayVideo()"
      />
      } @else if(question()) {
      <video
        [src]="serverUrl + question().resources[0].path"
        class="absolute inset-0 w-full h-full max-h-screen object-cover"
        (ended)="onVideoEnded()"
        controls
        autoplay
      ></video>
      }
    </div>
  `,
})
export class TikTokVideoComponent {
  readonly serverUrl = environment.serverUrl;
  public question = input.required<Question>();
  @Output() answerSubmitted = new EventEmitter<boolean>();

  constructor() {
    // console.log(this.question());
  }

  showAnswerPage = false;

  onVideoEnded() {
    this.showAnswerPage = true;
    console.log('Video ended');
  }

  onAnswer() {
    this.answerSubmitted.emit();
    this.showAnswerPage = false;
  }

  replayVideo() {
    this.showAnswerPage = false;
  }
}
