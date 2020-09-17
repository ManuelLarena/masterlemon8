import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CRUDComponent } from './crud/crud.component';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    ProfileComponent,
    CRUDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
