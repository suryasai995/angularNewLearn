import { Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:MainViewComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'**',component:NotFoundComponent}
];
