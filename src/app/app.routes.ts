import { Routes } from '@angular/router';
import { HomepagePageComponent } from './pages/homepage/homepage.page';
import { ShortsPageComponent } from './pages/shorts-page/shorts.page';
export const routes: Routes = [
    { path: '', component: HomepagePageComponent },
    { path: 'shorts', component: ShortsPageComponent },
];
