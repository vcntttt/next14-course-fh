import { Pokemon } from "@/types/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string; // all params are strings
  };
}

export async function generateStaticParams() {
  // Esta siempre se llama asi, es para que se construyan paginas estaticas en tiempo de construccion para tener algunas preparadas, en este caso vamos a tener pre-generadas 151 paginas de pokemones.
  const static151 = Array.from({ length: 151 }, (_, i) => i + 1);
  return static151.map((id) => ({ id: id.toString() }));
}

// importante el export, el nombre y el tipo de la funcion
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemonByID(params.id);
  return {
    title: `#${pokemon.id} - ${pokemon.name}`,
  };
}

async function getPokemonByID(id: string): Promise<Pokemon> {
  try {
    const data: Pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      {
        // cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24 * 7, // Vuelve a mandar la petición cada 7 días
        },
      }
    ).then((res) => res.json());

    return data;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function PokemonByIDPage({ params }: Props) {
  const pokemon = await getPokemonByID(params.id);
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <h2 className="text-xl font-bold text-slate-700 mb-2">
              Movimientos
            </h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.moves.slice(0).map((move) => (
                <p
                  key={move.move.name}
                  className={"mr-2 capitalize border p-2 rounded-md"}
                >
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  border">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 border ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  border">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  border">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
