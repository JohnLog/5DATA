import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MATERIAL DESIGN MODULES
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { Page1Component } from './page1';
import { Page2Component } from './page2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
