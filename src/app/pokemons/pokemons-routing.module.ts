import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLayoutComponent } from './layouts/pokemon-layout/pokemon-layout.component';
import { SimplePokemonsComponent } from './pages/simple-pokemons/simple-pokemons.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonLayoutComponent,
    children: [
      { path: 'simple-list', component: SimplePokemonsComponent },
      { path: 'model-list', component: PokemonListComponent },

      { path: '**', redirectTo: 'simple-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
