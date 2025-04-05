import { Component, input } from "@angular/core";

@Component({
    selector: 'app-tiktok-video',
    template: `<video [src]="videoUrl()"></video>`,
    styles: []
})
export class TikTokVideoComponent {
    public videoUrl = input.required<string>();
}