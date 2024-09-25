import PokemonCard from "@/components/pokemons/card";

export default async function PokemonFavoritesPage() {
  const { pokemons } = { pokemons: [{ id: "1", name: "pikachu" }] };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Pokemons</h1>
      <div className="flex flex-wrap gap-4">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-xl font-semibold">
              No tienes favoritos
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
