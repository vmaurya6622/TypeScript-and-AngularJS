import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { profileComponent } from './aboutPage';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: profileComponent}
];
