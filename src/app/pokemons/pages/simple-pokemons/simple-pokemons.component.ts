import { Component, OnInit, inject, signal } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { SimplePokemon } from '../../interfaces/pokemons-response';

@Component({
  templateUrl: './simple-pokemons.component.html',
  styleUrls: ['./simple-pokemons.component.css']
})
export class SimplePokemonsComponent implements OnInit  {

  public pokemonsService = inject( PokemonsService );
  public currentPage = signal(0);
  public pokemons    = signal<SimplePokemon[]>([]);


  ngOnInit(): void {
    this.loadNextPage();
  }

  loadNextPage() {
    this.currentPage.update( page => page + 1 );

    this.pokemonsService.loadPage( this.currentPage() )
      .subscribe( pokemons => {
        console.log(pokemons)
        // this.pokemons.set( pokemons );
        this.pokemons.update( currentPokemons => [ ...currentPokemons, ...pokemons ])
      });
  }




}
