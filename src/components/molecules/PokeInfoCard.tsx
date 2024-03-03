import { PokemonInfo } from "../../domain/Pokemon";

type PokemonInfoCardProps = {
  pokemonInfo: PokemonInfo | undefined;
  count: number;
};
export const PokemonInfoCard = (props: PokemonInfoCardProps) => {
  return (
    <>
      <div style={{ minHeight: "500px" }}>
        <div style={{ minHeight: "250px" }}>
          <img
            src={props.pokemonInfo?.imgURL ?? ""}
            style={{ minHeight: "250px" }}
          />
        </div>
        <div style={{ minHeight: "30px" }}>
          <h3 style={{ minHeight: "10px" }}>
            <p>No.{props.count}</p>
          </h3>
          <h2 style={{ minHeight: "40px" }}>{props.pokemonInfo?.name.ja}</h2>
          <p>
            タイプ<br></br>
            {props.pokemonInfo?.type.type1 == "none"
              ? null
              : props.pokemonInfo?.type.type1}{" "}
            {props.pokemonInfo?.type.type2 == "none"
              ? null
              : "・" + props.pokemonInfo?.type.type2}
          </p>
        </div>
      </div>
    </>
  );
};
