import { Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardListComponent } from './components/card-list/card-list.component';

export const routes: Routes = [
    {path:'',component:MainViewComponent},
    {path:'aboutus',component:AboutusComponent},
    
    {path:'list',component:CardListComponent},
    {path:'**',component:NotFoundComponent}
];
