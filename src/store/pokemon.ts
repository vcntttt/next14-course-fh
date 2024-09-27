import { SimplePokemon } from "@/types/pokemons";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Store = {
  pokemons: Record<string, SimplePokemon>;
  toggleFavorite: (pokemon: SimplePokemon) => void;
};

const usePokemonsStore = create<Store>()(
  devtools(persist(
    (set) => ({
      pokemons: {},
      toggleFavorite: (pokemon: SimplePokemon) =>
        set((state) => {
          const { id } = pokemon;
          const currentPokemons = { ...state.pokemons };
          
          if (currentPokemons[id]) {
            delete currentPokemons[id];
          } else {
            currentPokemons[id] = pokemon;
          }

          return { pokemons: currentPokemons };
        }, false, { type: 'toggleFavorite', pokemon }),
    }),
    { name: 'PokemonsStore' }
  )
));
export default usePokemonsStore;
