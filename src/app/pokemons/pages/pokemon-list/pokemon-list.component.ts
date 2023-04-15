import { Component, computed, inject, signal } from '@angular/core';

import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {


  public pokemonsService = inject( PokemonsService );
  public currentPage = signal(0);
  public pokemons    = signal<Pokemon[]>([]);

  public totalPokemons = computed( () => `Total de pokemons ${ this.pokemons().length }`  );


  public pokemonsArray: Pokemon[] = []


  ngOnInit(): void {
    this.loadNextPage();
  }

  loadNextPage() {
    this.currentPage.update( page => page + 1 );

    this.pokemonsService.loadPokemonPage( this.currentPage() )
      .subscribe( pokemons => {
        // console.log( pokemons[0] instanceof Pokemon )
        // this.pokemons.set( pokemons );
        this.pokemons.update( currentPokemons => [ ...currentPokemons, ...pokemons ]);

        this.pokemonsArray = [ ...this.pokemonsArray, ...pokemons ];
      });
  }


}
