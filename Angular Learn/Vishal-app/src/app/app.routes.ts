import { Routes } from '@angular/router';
import { HomeComponent, userComponent } from './home.component';
import { authGuard } from './auth.guard';
// import { profileComponent } from './profile.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'about', component: profileComponent}, //Normal Loading
    {path: 'about', loadComponent:()=> import('./profile.component').then(m => m.profileComponent)},//LazyLoading
    { path: 'user/:id', component: userComponent },
    {path:'protected', component: userComponent, canActivate: [authGuard]}
];
