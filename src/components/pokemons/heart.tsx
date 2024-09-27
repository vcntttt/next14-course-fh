"use client";
import usePokemonsStore from "@/store/pokemon";
import { SimplePokemon } from "@/types/pokemons";
import { HeartIcon } from "lucide-react";

interface Props {
  pokemon: SimplePokemon;
}

export default function Heart({ pokemon }: Props) {
  const isFavorite = usePokemonsStore((state) => state.pokemons[pokemon.id]);
  const { toggleFavorite } = usePokemonsStore();
  return (
    <div onClick={() => toggleFavorite(pokemon)} className="cursor-pointer">
      {isFavorite ? (
        <svg
          className="text-red-500 size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
        </svg>
      ) : (
        <HeartIcon className="size-5" />
      )}
    </div>
  );
}
