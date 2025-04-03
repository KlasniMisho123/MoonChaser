import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HeroComponent } from './Components/hero/hero.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { MoonComponent } from './Components/moon/moon.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';

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
    },
    {
        path: "weather",
        component: LayoutComponent, 
        children: [
            {
                path: "", 
                component: WeatherComponent
            }
        ]
    },
    {
        path: "moon",
        component: LayoutComponent, 
        children: [
            {
                path: "", 
                component: MoonComponent
            }
        ]
    },
    {
        path: "aboutus",
        component: LayoutComponent, 
        children: [
            {
                path: "", 
                component: AboutusComponent
            }
        ]
    }
];
