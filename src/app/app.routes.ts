import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LayoutComponent } from './Components/layout/layout.component';
const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: "", component: HomePageComponent }
        ]
    }
];