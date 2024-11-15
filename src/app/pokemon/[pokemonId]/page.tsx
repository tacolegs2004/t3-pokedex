import Image from "next/image";
import { PokemonClient } from "pokenode-ts";

const pokemonClient = new PokemonClient();

const PokemonPage = async (props: {
  params: Promise<{ pokemonId: number }>;
}) => {
  const params = await props.params;
  const pokemon = await pokemonClient.getPokemonById(params.pokemonId);

  return (
    <div className="container flex w-full h-screen flex-col items-center justify-center gap-4 p-4">
      <section className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-black shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold capitalize">
          {pokemon.name}
        </h1>
        <Image
          src={pokemon.sprites.front_default ?? "/placeholder.png"}
          alt={`${pokemon.name}'s sprite`}
          width={120}
          height={120}
        />
        <div className="mt-4 text-center">
          <p className="text-lg capitalize">
            <strong>Type:</strong>{" "}
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
          <p className="text-lg">
            <strong>Height:</strong> {pokemon.height / 10} m
          </p>
          <p className="text-lg">
            <strong>Weight:</strong> {pokemon.weight / 10} kg
          </p>
          <p className="text-lg capitalize">
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PokemonPage;
