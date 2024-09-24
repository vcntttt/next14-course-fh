export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
}
