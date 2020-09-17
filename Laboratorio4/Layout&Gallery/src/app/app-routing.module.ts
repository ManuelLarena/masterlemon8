import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CRUDComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { appRoutes } from './conf/paths';

const authService: AuthService = new AuthService();

let isLogged: boolean = authService.isLogged();

const handleRoutes = (): string =>
  isLogged ? appRoutes.dashboard : appRoutes.home;

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'crud', component: CRUDComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: handleRoutes(), pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
