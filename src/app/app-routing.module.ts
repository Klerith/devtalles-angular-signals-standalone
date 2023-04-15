import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then( m=> m.PokemonsModule ),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/pages/not-found-page/not-found-page.component')
      .then( m => m.NotFoundPageComponent ),
  },
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
