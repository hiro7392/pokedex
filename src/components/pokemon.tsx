import { MainClient } from "pokenode-ts";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import { pokemonNameMap, toLowerCase } from "../data/mapNameLanguage";
import { toJapaneseType } from "../data/pokemonTypeMap";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
type pokemonType={
  type1:string | null,
  type2:string | null  
}

export const Pokemon = () => {
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [count,setCount] =useState<number>(0);
  const {data:pokemonData} = useSWR(toLowerCase(pokemonNameMap[count].en), () =>
  api.pokemon.getPokemonByName(toLowerCase(pokemonNameMap[count].en))
  );
  const [types,setTypes]=useState<pokemonType>({type1:"none",type2:"none"});
  const api = new MainClient();
  

  const handleClick = () => {
    setImgURL(pokemonData?.sprites.front_default ?? null);
  };
  useEffect(()=>{
    setImgURL(pokemonData?.sprites.front_default ?? null);
    setTypes({
      type1: toJapaneseType(pokemonData?.types[0]?.type?.name) ?? "none",
      type2: toJapaneseType(pokemonData?.types[1]?.type?.name) ?? "none"
    });
  },[count,pokemonData])

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <div style={{minHeight:"130px"}}>
          <img src={imgURL ?? ""} style={{minHeight:"200px"}}/>
        </div>
      </Suspense>
      {
        count > 0 ? 
        <button onClick={() => setCount((count) => count - 1)}>
        {"<"}
        </button>
        : null
      }
      {
        count < pokemonNameMap.length
        ?<button onClick={() => setCount((count) => count + 1)}>
        {">"}
        </button>
        : null
      }
      <div>
        <p>タイプ<br></br>{types.type1=="none"?null:types.type1} {types.type2=="none"?null:"・"+types.type2}</p>
      </div>
      <button onClick={handleClick}>get pokemon</button>
    </>
  );
};
