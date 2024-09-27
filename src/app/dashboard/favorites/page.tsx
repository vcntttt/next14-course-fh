import PokemonFavoritesGrid from "@/components/pokemons/favorites-grid";

export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};

export default function PokemonFavoritesPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Pokemons</h1>
      <PokemonFavoritesGrid/>
    </div>
  );
}
