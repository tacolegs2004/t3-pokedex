import Image from "next/image";
import Link from "next/link";
import { type Pokemon, PokemonClient } from "pokenode-ts";

const pokemonClient = new PokemonClient();

const PokemonComponent = (props: { pokemon: Pokemon }) => {
  if (!props.pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <Link
      href={`/pokemon/${props.pokemon.id}`}
      className="flex flex-col items-center transition-opacity"
      key={props.pokemon.id}
    >
      <Image
        src={props.pokemon.sprites.front_default!}
        alt={props.pokemon.name}
        width={100}
        height={100}
        layout="fixed"
        className="animate-fade-in transition-all hover:scale-110 hover:opacity-80"
      />
      <div className="mt-[-0.5rem] text-center text-lg capitalize">
        {props.pokemon.name}
      </div>
      <div className="mt-4 text-center text-xl capitalize">
        {props.pokemon.id}
      </div>
    </Link>
  );
};

const HomePage = async () => {
  const pokemon = await Promise.all(
    Array.from({ length: 151 }, (_, i) => pokemonClient.getPokemonById(i + 1)),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-4xl font-bold">
        Welcome to the <span className="text-pink-500">T3 Poke</span> website!
      </h1>
      <p className="text-lg">
        This is a simple website to showcase the capabilities of the Poke API.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {pokemon.map((poke) => (
          <PokemonComponent key={poke.id} pokemon={poke} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
