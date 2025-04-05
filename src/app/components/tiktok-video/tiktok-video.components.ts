import { Component, input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { QuizAnswerPageComponent } from "../quiz-answer-page/quiz-answer-page.component";

@Component({
    selector: 'app-tiktok-video',
    standalone: true,
    imports: [QuizAnswerPageComponent],
    template: `
        <div class="relative w-full h-screen">

            @if (showAnswerPage) {
                <app-quiz-answer-page
                    (answer)="onAnswer()"
                    (replayVideo)="replayVideo()"
                />
            } @else {
            <video
                [src]="videoUrl()" 
                class="absolute inset-0 w-full h-full max-h-screen object-cover"
                (ended)="onVideoEnded()"
                controls
                autoplay
            ></video>
            }
        </div>
    `
})
export class TikTokVideoComponent {
    public videoUrl = input.required<string>();
    @Output() answerSubmitted = new EventEmitter<boolean>();
    
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