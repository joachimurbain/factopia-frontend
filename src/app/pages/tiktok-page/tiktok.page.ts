import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { TikTokVideoComponent } from '../../components/tiktok-video/tiktok-video.components';
@Component({
  selector: 'app-tiktok-page',
  standalone: true,
  imports: [TikTokVideoComponent],
  template: `
      <div>
          <app-tiktok-video [videoUrl]="videos[0]" />
      </div>
  `,
})
export class TiktokPageComponent implements OnInit {
    
    public videos: string[] = [];
    public apiService = inject(ApiService);

    ngOnInit(): void {
        this.apiService.getAllVideos().subscribe((videos) => {
            this.videos = videos;
        });
    }
}
