import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HeroComponent } from './Components/hero/hero.component';

export const routes: Routes = [
    {
        path: "",
        component:HeroComponent,
        pathMatch: 'full'
    },
    {
        path: "home",
        component: LayoutComponent,
        children: [
            { 
                path: "", 
                component: HomePageComponent 
            }
        ]
    }
];
