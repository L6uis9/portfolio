import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Engineering } from './pages/engineering/engineering';
import { Mobility } from './pages/mobility/mobility';
import { Sustainability } from './pages/sustainability/sustainability';
import { Activities } from './pages/activities/activities';
import { Career } from './pages/career/career';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to 'home'
    { path: 'home', component: Home },
    { path: 'engineering', component: Engineering },
    { path: 'mobility', component: Mobility },
    { path: 'sustainability', component: Sustainability },
    { path: 'activities', component: Activities },
    { path: 'career', component: Career },
    { path: '**', redirectTo: 'home' } // Wildcard route redirects to 'home'
];
