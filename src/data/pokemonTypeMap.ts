export const pokemonTypesMap = [
  {
    en: "normal",
    ja: "ノーマル",
  },
  {
    en: "fire",
    ja: "ほのお",
  },
  {
    en: "water",
    ja: "みず",
  },
  {
    en: "grass",
    ja: "くさ",
  },
  {
    en: "electric",
    ja: "電気",
  },
  {
    en: "ice",
    ja: "こおり",
  },
  {
    en: "fighting",
    ja: "かくとう",
  },
  {
    en: "poison",
    ja: "どく",
  },
  {
    en: "ground",
    ja: "じめん",
  },
  {
    en: "flying",
    ja: "ひこう",
  },
  {
    en: "psychic",
    ja: "エスパー",
  },
  {
    en: "bug",
    ja: "むし",
  },
  {
    en: "rock",
    ja: "いわ",
  },
  {
    en: "ghost",
    ja: "ゴースト",
  },
  {
    en: "dragon",
    ja: "ドラゴン",
  },
  {
    en: "dark",
    ja: "あく",
  },
  {
    en: "steel",
    ja: "はがね",
  },
  {
    en: "fairy",
    ja: "フェアリー",
  },
];
export const toJapaneseType = (enType: string | undefined) => {
  const types = pokemonTypesMap.find(({ en }) => en === enType);
  return types?.ja;
};
