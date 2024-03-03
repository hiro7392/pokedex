import { MainClient } from "pokenode-ts";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import { pokemonNameMap, toCapitalize, toJapaneseName, toLowerCase} from "../data/pokemonNameMap";
import { toJapaneseType } from "../data/pokemonTypeMap";
import { NumberForm } from "./moleucules/NumberForm";
import { ChangePokemonPageButton } from "./moleucules/ChangePokemonPageButton";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

type pokemonType={
  type1:string | null,
  type2:string | null  
}

type pokemonName={
  en:string,
  ja:string,
}

type PokemonInfo={
  name:pokemonName,
  type:pokemonType,
  imgURL:string
}

export const Pokemon = () => {
  const [count,setCount] =useState<number>(0);
  const [pokemonInfo,setPokemonInfo]=useState<PokemonInfo>();
  const {data:pokemonData} = useSWR(toLowerCase(pokemonNameMap[count].en), () =>
  api.pokemon.getPokemonByName(toLowerCase(pokemonNameMap[count].en))
  );
  // const [types,setTypes]=useState<pokemonType>({type1:"none",type2:"none"});
  const api = new MainClient();
  
  useEffect(()=>{
    setPokemonInfo({
      type:{
        type1: toJapaneseType(pokemonData?.types[0]?.type?.name) ?? "none",
        type2: toJapaneseType(pokemonData?.types[1]?.type?.name) ?? "none"
      },
      name:{
        en: pokemonData?.name ?? "",
        ja: toJapaneseName(toCapitalize(pokemonData?.name ?? "")),
      },
      imgURL:pokemonData?.sprites.front_default ?? ""
    })
  },[count,pokemonData])

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <div style={{minHeight:"500px"}}>
        <div style={{minHeight:"250px"}}>
          <img src={pokemonInfo?.imgURL ?? ""} style={{minHeight:"250px"}}/>
        </div>
        <div style={{minHeight:"30px"}}>
        <h3 style={{minHeight:"10px"}}>
          <p>No.{count+1}</p>
        </h3>
        <h2 style={{minHeight:"40px"}}>
          {pokemonInfo?.name.ja}
        </h2>
        <p>タイプ<br></br>{pokemonInfo?.type.type1=="none"?null:pokemonInfo?.type.type1} {pokemonInfo?.type.type2=="none"?null:"・"+pokemonInfo?.type.type2}</p>
      </div>
      </div>
      </Suspense>
      <ChangePokemonPageButton 
        count={count}
        length={pokemonNameMap.length}
        onClickIncrement={()=>setCount((count)=>count+1)}
        onClickDecrement={()=>setCount((count)=>count-1)}
      />
      <NumberForm setNumber={setCount} num={count}/>
    </>
  );
};
