import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'yo',
    pathMatch: 'full'
  },
  
  {
    path: 'yo',
    loadChildren: () => import('./yo/yo.module').then( m => m.YoPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
