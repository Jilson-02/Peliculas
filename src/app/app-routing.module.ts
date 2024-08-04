import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './Guards/login.guard'; // Ajusta esta ruta según la ubicación de tu guard
import { logoutGuard } from './Guards/logout.guard'; // Ajusta esta ruta según la ubicación de tu guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
   // canActivate: [loginGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/registro/registro.module').then(m => m.RegistroPageModule),
  //  canActivate: [loginGuard] 
  },
  {
    path: 'principal',
    loadChildren: () => import('./Paginas/principal/principal.module').then(m => m.PrincipalPageModule),
   // canActivate: [logoutGuard] 
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
