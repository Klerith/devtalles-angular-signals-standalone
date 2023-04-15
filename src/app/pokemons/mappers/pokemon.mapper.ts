import { SimplePokemon } from "../interfaces/pokemons-response";
import { Pokemon } from "../models/pokemon";


export class PokemonMapper{


  static simplePokemonToModel( info: SimplePokemon ) {

    const urlSegments = info.url.split('/')
    const id = urlSegments[ urlSegments.length - 2 ]
    console.log(urlSegments);

    return new Pokemon( id, info.name );

  }


}
