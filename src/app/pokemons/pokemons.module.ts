import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SimplePokemonsComponent } from './pages/simple-pokemons/simple-pokemons.component';
import { PokemonLayoutComponent } from './layouts/pokemon-layout/pokemon-layout.component';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    SimplePokemonsComponent,
    PokemonLayoutComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SideMenuComponent,
  ]
})
export class PokemonsModule { }
