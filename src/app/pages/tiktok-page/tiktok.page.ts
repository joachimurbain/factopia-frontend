import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { TikTokVideoComponent } from '../../components/tiktok-video/tiktok-video.components';
@Component({
  selector: 'app-tiktok-page',
  standalone: true,
  imports: [TikTokVideoComponent],
  template: `
      <div class="h-screen w-full">
          <app-tiktok-video 
              [videoUrl]="currentVideo" 
              (answerSubmitted)="onAnswerSubmitted($event)"
          />
      </div>
  `,
})
export class TiktokPageComponent implements OnInit {
    public videos: string[] = [];
    public currentVideoIndex = 0;
    public apiService = inject(ApiService);

    get currentVideo(): string {
        return this.videos[this.currentVideoIndex];
    }

    ngOnInit(): void {
        this.apiService.getAllVideos().subscribe((videos) => {
            this.videos = videos;
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
