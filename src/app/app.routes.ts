import { Routes } from '@angular/router';
import { HomepagePageComponent } from './pages/homepage/homepage.page';
import { ShortsPageComponent } from './pages/shorts-page/shorts.page';
import { TrueFalsePageComponent } from './pages/true-false-page/true-false.page';

export const routes: Routes = [
    { path: '', component: HomepagePageComponent },
    { path: 'shorts', component: ShortsPageComponent },
    { path: 'true-false', component: TrueFalsePageComponent },
];
