import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {TrueFalseQuestion} from '../interfaces/TrueFalseQuestion';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _http = inject(HttpClient);
  private readonly QUESTION_URL = 'json-data/true_false_questions.json';

  getAllVideos(): Observable<string[]> {
    const videos = [
      // 'videos/1_A.mp4', Does not work well with shorts format
      'videos/1_B.mp4',
      'videos/2_A.mp4',
      'videos/2_B.mp4',
      'videos/3_A.mp4',
      // 'videos/3_B.mov', does not play
      'videos/4_A.mp4',
      'videos/4_B.mp4',
      'videos/5_A.mp4',
      'videos/5_B.mp4',
    ];

    return of(videos);
  }

  getQuestions(): Observable<TrueFalseQuestion[]> {
    return this._http.get<TrueFalseQuestion[]>(this.QUESTION_URL);
  }
}
