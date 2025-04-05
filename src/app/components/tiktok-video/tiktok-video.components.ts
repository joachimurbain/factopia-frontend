import { Component, input } from "@angular/core";

@Component({
    selector: 'app-tiktok-video',
    standalone: true,
    template: `
        <div class="relative w-full h-screen">
            <video 
                [src]="videoUrl()" 
                class="absolute inset-0 w-full h-full object-cover"
                controls
                autoplay
                loop
            ></video>
        </div>
    `,
    styles: []
})
export class TikTokVideoComponent {
    public videoUrl = input.required<string>();
}