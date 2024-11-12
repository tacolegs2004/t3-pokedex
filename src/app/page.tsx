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
      prefetch={true}
      className="flex flex-col items-center transition-opacity"
      key={props.pokemon.id}
    >
      {props.pokemon.sprites.front_default ? (
        <Image
          src={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
          width={100}
          height={100}
          layout="fixed"
          className="animate-fade-in transition-all hover:scale-110 hover:opacity-80"
        />
      ) : (
        <div>Sprite not found.</div>
      )}
      <div className="mt-[-0.5rem] text-center text-lg font-semibold capitalize text-yellow-500">
        {props.pokemon.name}
      </div>
    </Link>
  );
};

const HomePage = async () => {
  const pokeData = await Promise.all(
    Array.from({ length: 151 }, (_, i) => pokemonClient.getPokemonById(i + 1)),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-4xl font-bold">
        Welcome to the <span className="text-pink-500">T3 Poke</span> website!
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {pokeData.map((pokemon) => (
          <PokemonComponent key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
