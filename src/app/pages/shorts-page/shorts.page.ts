import { Component } from "@angular/core";
import { TikTokVideoComponent } from "../../components/tiktok-video/tiktok-video.components";
@Component({
    selector: 'app-shorts-page',
    imports: [TikTokVideoComponent],
    template: `<div><app-tiktok-video /></div>`,
    styles: []
})
export class ShortsPageComponent {}
