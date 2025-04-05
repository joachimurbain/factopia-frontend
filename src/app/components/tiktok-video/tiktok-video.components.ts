import { Component, input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { QuizAnswerPageComponent } from "../quiz-answer-page/quiz-answer-page.component";
import { Question } from "../../services/question.model";

@Component({
    selector: 'app-tiktok-video',
    standalone: true,
    imports: [QuizAnswerPageComponent],
    template: `
        <div class="relative w-full h-screen">

            @if (showAnswerPage) {
            <span>Answer page</span>
            <app-quiz-answer-page
                [question]="question()"
                (answer)="onAnswer()"
                (replayVideo)="replayVideo()"
                />
            } @else {
            <video
                [src]="question().resource.path" 
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