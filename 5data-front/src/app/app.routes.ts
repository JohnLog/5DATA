import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home';
import { TimeEvolutionComponent } from './time-evolution';
import { Page2Component } from './page2';
import { StudentListComponent } from './student-list';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'time-evolution', component: TimeEvolutionComponent },
  { path: 'page2', component: Page2Component },
  { path: 'student-list', component: StudentListComponent },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
