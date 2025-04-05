import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
    selector: 'app-quiz-answer-page',
    standalone: true,
    template: `
        <div class="h-screen w-full flex flex-col items-center justify-center bg-black/80 text-white px-4">

            <div class="space-y-8 text-center">
                @if (!hasAnswered) {
                <h2 class="text-2xl font-bold mb-6">La vidéo est-elle vraie ou fausse ?</h2>
                <div class="flex gap-4 justify-center">
                    <button 
                        (click)="onAnswer(true)"
                        class="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl font-semibold transition">
                        Vrai
                    </button>
                    <button 
                        (click)="onAnswer(false)"
                        class="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-xl font-semibold transition">
                        Faux
                    </button>
                </div>

                <button 
                    (click)="onReplayVideo()"
                    class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 mx-auto transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    Revoir la vidéo
                    </button>
                }

                @if (hasAnswered) {
                    @if (isAnswerCorrect()) {r
                        <span class="text-2xl font-bold mb-6 text-green-500">Réponse correcte !</span>
                    } @else {
                        <span class="text-2xl font-bold mb-6 text-red-500">Réponse incorrecte !</span>
                    }
                    @if (showExplanation) {
                        <div class="mt-6 text-center">
                            <p class="text-lg">Explication</p>
                            <p class="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    }
                    <button 
                    (click)="nextVideo()"
                    class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 mx-auto transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    Vidéo suivante
                    </button>
                }

            </div>
        </div>
    `
})
export class QuizAnswerPageComponent {
    @Output() answer = new EventEmitter<void>();
    @Output() replayVideo = new EventEmitter<void>();
    tiktokQuizz = input.required<any>();

    hasAnswered = false;
    showExplanation = false;
    quizzAnswer = false;

    onAnswer(choice: boolean) {
        this.quizzAnswer = choice;
        this.hasAnswered = true;
        if (!this.isAnswerCorrect() || this.isImageFalse()) {
            this.showExplanation = true;
        } else {
            this.answer.emit();
        }
    }
    nextVideo() {
        this.answer.emit();
    }

    isAnswerCorrect(): boolean {
        // TODO: Check if the answer is correct
        return true;
    }
    
    isImageFalse(): boolean {
        // TODO: Check if the image is false
        return true;
    }

    onReplayVideo() {
        this.replayVideo.emit();
    }
} 