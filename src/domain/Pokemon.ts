export type PokemonType = {
  type1: string | null;
  type2: string | null;
};

export type PokemonName = {
  en: string;
  ja: string;
};

export type PokemonInfo = {
  name: PokemonName;
  type: PokemonType;
  imgURL: string;
};
