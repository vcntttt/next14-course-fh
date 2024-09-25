import PokemonCard from "@/components/pokemons/card";
import type { PokemonResponse, Result, SimplePokemon } from "@/types/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon: Result) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Pokemons</h1>
      <div className="flex flex-wrap gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
