import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonsReponse, SimplePokemon } from '../interfaces/pokemons-response';
import { Pokemon } from '../models/pokemon';
import { PokemonMapper } from '../mappers/pokemon.mapper';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'; // ?offset=20



  constructor( private http: HttpClient ) {
    console.log('servicio inicializado');
  }


  loadPage( page: number = 1 ): Observable<SimplePokemon[]> {

    if ( page < 1 ) throw 'La página no puede ser menor a 1';

    page--;

    return this.http.get<PokemonsReponse>(this.baseUrl, { params: {
      offset: page * 20
    }})
    .pipe(
      map( response => response.results )
    );


  }


  loadPokemonPage( page: number = 1 ): Observable<Pokemon[]> {

    if ( page < 1 ) throw 'La página no puede ser menor a 1';

    page--;

    return this.http.get<PokemonsReponse>(this.baseUrl, { params: {
      offset: page * 20
    }})
    .pipe(
      map( response => {

        const pokemons: Pokemon[] = response.results
        .map( PokemonMapper.simplePokemonToModel )

        return pokemons;
      }),
    );


  }

}
