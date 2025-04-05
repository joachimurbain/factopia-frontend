import { Routes } from '@angular/router';
import { HomepagePageComponent } from './pages/homepage/homepage.page';
import { TiktokPageComponent } from './pages/tiktok-page/tiktok.page';
import { TrueFalsePageComponent } from './pages/true-false-page/true-false.page';

export const routes: Routes = [
    { path: '', component: HomepagePageComponent },
    { path: 'tiktok', component: TiktokPageComponent },
    { path: 'true-false', component: TrueFalsePageComponent },
];
