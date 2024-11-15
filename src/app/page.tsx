import { PokemonClient } from "pokenode-ts";
import PokemonCard from "./_components/pokemon-card";

const pokemonClient = new PokemonClient();

const HomePage = async () => {
  const pokeData = await Promise.all(
    Array.from({ length: 151 }, (_, i) => pokemonClient.getPokemonById(i + 1)),
  );

  if (!pokeData) {
    return <div>Error fetching pokemon data.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="flex flex-wrap justify-center gap-4">
        {pokeData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
