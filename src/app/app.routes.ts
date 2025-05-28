import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'shop',
        loadComponent: () => import('./components/shop/shop.component').then(m => m.ShopComponent)

    },
    {
        path:'cart',
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)

    }

];
