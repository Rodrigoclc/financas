import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: MainComponent, 
        children: [
            { path: '', component: HomeComponent }
        ]
    }
];