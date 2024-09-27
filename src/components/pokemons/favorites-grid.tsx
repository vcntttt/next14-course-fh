"use client";
import PokemonGrid from "./grid";
import usePokemonsStore from "@/store/pokemon";

export default function PokemonFavoritesGrid() {
  const pokemons = usePokemonsStore((state) => state.pokemons);
  const favorites = Object.values(pokemons);
  return (
    <div>
      {favorites.length > 0 ? (
        <PokemonGrid pokemons={favorites} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h2 className="text-xl font-semibold">
            No tienes favoritos
          </h2>
        </div>
      )}
    </div>
  );
}
