import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { SimplePokemon } from "@/types/pokemons";
import { Heart } from "lucide-react";
import Link from "next/link";

interface Props {
  pokemon: SimplePokemon;
}

export default function PokemonCard({pokemon}: Props) {
  return (
    <Card className="hover:bg-muted hover:text-foreground">
      <CardHeader>
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
        <Link href={`/dashboard/pokemon/${pokemon.name}`} className="underline">Más información</Link>
      </CardHeader>
      <CardContent>
      <div key={pokemon.id} className="flex gap-4 items-center justify-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            className="size-14"
            width={256}
            height={256}
            priority={false} // Carga las imagenes bajo demanda, no todas de una
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Heart className="h-5 w-5"/>
      </CardFooter>
    </Card>
  );
}
