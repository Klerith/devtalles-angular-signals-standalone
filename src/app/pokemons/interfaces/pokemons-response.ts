
export interface PokemonsReponse {
  count:    number;
  next:     string;
  previous: string;
  results:  SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url:  string;
}
