import Image from "next/image";
import Link from "next/link";
import { type Pokemon } from "pokenode-ts";

const PokemonCard = (props: { pokemon: Pokemon }) => {
  return (
    <Link
      href={`/pokemon/${props.pokemon.id}`}
      prefetch={true}
      className="flex flex-col items-center transition-opacity"
      key={props.pokemon.id}
    >
      <Image
        src={props.pokemon.sprites.front_default!}
        alt={props.pokemon.name}
        width={100}
        height={100}
        className="animate-fade-in transition-all hover:scale-110 hover:opacity-80"
      />
      <div className="mt-[-0.5rem] text-center text-lg font-semibold capitalize text-yellow-500">
        {props.pokemon.name}
      </div>
    </Link>
  );
};

export default PokemonCard;
