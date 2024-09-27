import { SimplePokemon } from "@/types/pokemons";
import PokemonCard from "./card";

interface Props {
  pokemons: SimplePokemon[];
}
export default function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
