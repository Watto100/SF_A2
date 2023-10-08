import { Routes } from '@angular/router';
import { authGuard} from './guards/auth.guard';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)},
    {path: 'home', 
    canActivate:[authGuard],
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
    {path: 'profile', 
    canActivate:[authGuard],
    loadComponent: () => import('./profile/profile.component').then(mod => mod.ProfileComponent)},
    {path: 'chat', 
    canActivate:[authGuard],
    loadComponent: () => import('./chat/chat.component').then(mod => mod.ChatComponent)},
    {path: 'home_group', 
    canActivate:[authGuard],
    loadComponent: () => import('./home_group/home.component').then(mod => mod.HomeGroupComponent)}
    
];
