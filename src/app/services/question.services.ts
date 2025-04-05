import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable, of } from 'rxjs';
import { Question } from './question.model';
import { EntityStateService } from '../core/data-access/entity-state.service';

import { GameTypes } from '../interfaces/GameTypes.enum';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends EntityStateService<Question> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'Question');

    effect(() => {
      const gameType = this._loadByGameType();
      if (!gameType) return;

      this.isLoading.set(true);
      this.error.set(null);

      this.getAllByGameType(gameType)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (items) => {
            const itemMap = Object.fromEntries(
              items.map((item) => [item.id, item])
            );
            this.state.update((state) => ({
              ...state,
              items,
              itemMap,
            }));
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Error loading items by game type');
          },
        });

      this._loadByGameType.set(null); // reset
    });
  }

  private readonly _loadByGameType = signal<GameTypes | null>(null);

  getAllByGameType(gameType: GameTypes) {
    const url = `${environment.apiUrl}question/gametype/${gameType}`;
    return this.httpClient.get<Question[]>(url);
  }

  public loadByGameType(gameType: GameTypes) {
    this._loadByGameType.set(gameType);
  }
}

// // GET request
// getAllVideos(): Observable<string[]> {
//   const videos = [
//     // 'videos/1_A.mp4', Does not work well with shorts format
//     'videos/1_B.mp4',
//     'videos/2_A.mp4',
//     'videos/2_B.mp4',
//     'videos/3_A.mp4',
//     // 'videos/3_B.mov', does not play
//     'videos/4_A.mp4',
//     'videos/4_B.mp4',
//     'videos/5_A.mp4',
//     'videos/5_B.mp4',
//   ];

//   // return this.http.get<Array<string>>(`${this.baseUrl}/videos/all`);
//   return of(videos);
// }
