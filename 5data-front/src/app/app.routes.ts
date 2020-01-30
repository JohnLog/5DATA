import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home';
import { Page1Component } from './page1';
import { Page2Component } from './page2';
import { StudentListComponent } from './student-list';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'student-list', component: StudentListComponent },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
