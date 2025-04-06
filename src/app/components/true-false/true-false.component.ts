import {Component, OnInit} from '@angular/core';
import {MenuBarComponent} from '../menu-bar/menu-bar.components';
import {TrueFalseQuestion} from '../../interfaces/TrueFalseQuestion';
import {ApiService} from '../../services/api.services';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-true-false',
  imports: [
    MenuBarComponent,
    NgClass
  ],
  templateUrl: './true-false.component.html',
  styles: []
})
export class TrueFalseComponent implements OnInit {
  questions: TrueFalseQuestion[] = [];
  currentIndex = 0;
  selectedAnswer: boolean | null = null;
  showResult = false;
  showExplanation = false;
  score = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.apiService.getQuestions().subscribe(data => {
      this.questions = this.shuffleArray(data).slice(0, 5);
      this.resetQuiz();
    });
  }

  get currentQuestion(): TrueFalseQuestion {
    return this.questions[this.currentIndex];
  }

  get progress(): string {
    return `${this.currentIndex + 1} / ${this.questions.length}`;
  }

  selectAnswer(answer: boolean): void {
    this.selectedAnswer = answer;
    const correct = answer === this.currentQuestion.correctAnswer;
    this.showExplanation = true;
    if (correct) {
      this.score++;
    }
  }

  nextQuestion(): void {
    this.selectedAnswer = null;
    this.showExplanation = false;

    if (this.currentIndex + 1 < this.questions.length) {
      this.currentIndex++;
    } else {
      this.showResult = true;
    }
  }

  restart(): void {
    this.loadQuestions();
  }

  private resetQuiz(): void {
    this.currentIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.showExplanation = false;
    this.showResult = false;
  }

  private shuffleArray<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}
