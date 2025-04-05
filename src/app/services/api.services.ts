import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.example.com';

  http = inject(HttpClient);

  // GET request
  getAllVideos(): Observable<string[]> {
    const videos = [
      'assets/videos/1_A.mp4',
      'assets/videos/1_B.mp4',
      'assets/videos/2_A.mp4',
      'assets/videos/2_B.mp4',
      'assets/videos/3_A.mp4',
      'assets/videos/3_B.mov',
      'assets/videos/4_A.mp4',
      'assets/videos/4_B.mp4',
      'assets/videos/5_A.mp4',
      'assets/videos/5_B.mp4',
    ];

    // return this.http.get<Array<string>>(`${this.baseUrl}/videos/all`);
    return of(videos);
  }
}