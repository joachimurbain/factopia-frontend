import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../services/api.services";
import { TikTokVideoComponent } from "../../components/tiktok-video/tiktok-video.components";

@Component({
    selector: 'app-shorts-page',
    imports: [CommonModule, TikTokVideoComponent],
    template: `
        <div>
            <app-tiktok-video [videoUrl]="videos[0]" />
        </div>
    `,
    styles: []
})
export class ShortsPageComponent implements OnInit {
    public videos: string[] = [];
    public apiService = inject(ApiService);

    ngOnInit(): void {
        this.apiService.getAllVideos().subscribe((videos) => {
            this.videos = videos;
        });
    }
}
