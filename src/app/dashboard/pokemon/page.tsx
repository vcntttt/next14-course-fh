import type {
  PokemonResponse,
  Result,
  SimplePokemon,
} from "@/components/pokemons/pokemons-response";
import Image from "next/image";

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
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Pokemons</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="flex gap-4 items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
          />
          <div>
            <h2 className="text-xl font-semibold">{pokemon.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
