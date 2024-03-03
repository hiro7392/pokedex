import { MainClient } from "pokenode-ts";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import {
  pokemonNameMap,
  toCapitalize,
  toJapaneseName,
  toLowerCase,
} from "../data/pokemonNameMap";
import { toJapaneseType } from "../data/pokemonTypeMap";
import { ChangePokemonPageButton } from "./molecules/ChangePokemonPageButton";
import { PokemonInfo } from "../domain/Pokemon";
import { PokemonInfoCard } from "./molecules/PokeInfoCard";
import { NumberForm } from "./molecules/molecules";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export const PokemonDex = () => {
  const [count, setCount] = useState<number>(1);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const { data: pokemonData } = useSWR(
    toLowerCase(pokemonNameMap[count - 1].en),
    () =>
      api.pokemon.getPokemonByName(toLowerCase(pokemonNameMap[count - 1].en)),
  );
  const api = new MainClient();

  useEffect(() => {
    setPokemonInfo({
      type: {
        type1: toJapaneseType(pokemonData?.types[0]?.type?.name) ?? "none",
        type2: toJapaneseType(pokemonData?.types[1]?.type?.name) ?? "none",
      },
      name: {
        en: pokemonData?.name ?? "",
        ja: toJapaneseName(toCapitalize(pokemonData?.name ?? "")),
      },
      imgURL: pokemonData?.sprites.front_default ?? "",
    });
  }, [count, pokemonData]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PokemonInfoCard pokemonInfo={pokemonInfo} count={count} />
        <NumberForm setNumber={setCount} num={count} />
        <ChangePokemonPageButton
          count={count}
          length={pokemonNameMap.length}
          onClickIncrement={() => setCount((count) => count + 1)}
          onClickDecrement={() => setCount((count) => count - 1)}
        />
      </Suspense>
    </>
  );
};
