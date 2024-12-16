import * as React from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonCard from "./_components/pokemon-card.tsx";

const pokemonClient = new PokemonClient();

const HomePage = async () => {
  const pokeData = await Promise.all(
    Array.from({ length: 151 }, (_, i) => pokemonClient.getPokemonById(i + 1)),
  );

  if (!pokeData) {
    return <div>Error fetching pokemon data.</div>;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-10">
      {pokeData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default HomePage;
