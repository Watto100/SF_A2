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
    loadComponent: () => import('./home_group/home.component').then(mod => mod.HomeGroupComponent)},
    {path: 'add_user', 
    canActivate:[authGuard],
    loadComponent: () => import('./add-user/add-user.component').then(mod => mod.AddUserComponent)},
    {path: 'add_group', 
    canActivate:[authGuard],
    loadComponent: () => import('./add-group/add-group.component').then(mod => mod.AddGroupComponent)},
    {path: 'image', 
    canActivate:[authGuard],
    loadComponent: () => import('./image-upload/image-upload.component').then(mod => mod.ImageUploadComponent)},
    {path: 'video', 
    canActivate:[authGuard],
    loadComponent: () => import('./video/video.component').then(mod => mod.VideoComponent)}
    
];
