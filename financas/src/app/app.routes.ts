import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { AdicionarRendaComponent } from './pages/adicionar-renda/adicionar-renda.component';
import { AdicionarDespesaComponent } from './pages/adicionar-despesa/adicionar-despesa.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    },
    { path: 'adicionar-renda', component: AdicionarRendaComponent },
    { path: 'adicionar-despesa', component: AdicionarDespesaComponent }
];
