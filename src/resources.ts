import {Quantitative, Resource} from "./types.js";
import {
  Fields,
  FishingGrounds,
  Grazing, Heathland,
  HuntingGround,
  Mine,
  PlacerDeposit,
  Plantations,
  Quarry,
  SurfaceMine
} from "./sources.js";
import {
  CoralReef,
  Desert,
  DriftIce,
  Fen,
  Forest,
  Jungle,
  KelpForest,
  LittoralBiomes,
  MangroveForest,
  Moorland,
  Mudflats,
  RainForest,
  SeagrassMeadow,
  Steppe,
  Swamp,
  TerrestrialBiomes,
  ThermalVent,
  Tundra,
  Veld
} from "./biomes.js";

export const JemStones: Resource = {
  name: "precious stones",
  sources: [SurfaceMine, Mine, PlacerDeposit],
  biomes: [...TerrestrialBiomes, ...LittoralBiomes],
  quantity: Quantitative.SPARSE
}
export const PreciousMetals: Resource = {
  name: "precious metals",
  sources: [SurfaceMine, Mine, PlacerDeposit],
  biomes: [...TerrestrialBiomes, ...LittoralBiomes],
  quantity: Quantitative.SPARSE
}
export const BaseMetals: Resource = {
  name: "base metals",
  sources: [SurfaceMine, Mine],
  biomes: [...TerrestrialBiomes],
  quantity: Quantitative.LOW
}
export const ConstructionStone: Resource = {
  name: "construction stone",
  sources: [SurfaceMine, Quarry],
  biomes: [...TerrestrialBiomes],
  quantity: Quantitative.MEDIUM
}
export const Clay: Resource = {
  name: "high quality clay",
  sources: [Quarry],
  biomes: [Forest, Jungle, Mudflats],
  quantity: Quantitative.MEDIUM
}
export const Furs: Resource = {
  name: "furs",
  sources: [HuntingGround],
  biomes: [Forest, Jungle, Tundra, Veld, Steppe, Fen, Moorland, DriftIce],
  quantity: Quantitative.MEDIUM
}
export const Ivory: Resource = {
  name: "ivory",
  sources: [HuntingGround],
  biomes: [Jungle, RainForest, Veld, Tundra, DriftIce],
  quantity: Quantitative.LOW
}
export const StapleGrain: Resource = {
  name: "grains",
  sources: [Fields],
  biomes: [Steppe, Veld, Tundra, Forest],
  quantity: Quantitative.MEDIUM
}
export const StapleVegetables: Resource = {
  name: "vegetables",
  sources: [Fields],
  biomes: [Steppe, Veld, Tundra, Forest, Jungle],
  quantity: Quantitative.HIGH
}
export const StapleFruits: Resource = {
  name: "fruit",
  sources: [Plantations],
  biomes: [Forest, Jungle, RainForest, MangroveForest],
  quantity: Quantitative.MEDIUM
}
export const Fish: Resource = {
  name: "fish",
  sources: [FishingGrounds],
  biomes: [KelpForest, SeagrassMeadow, MangroveForest, Mudflats, CoralReef, ThermalVent],
  quantity: Quantitative.MEDIUM
}
export const Game: Resource = {
  name: "game",
  sources: [HuntingGround],
  biomes: [Desert,
    Fen,
    Forest,
    Jungle,
    Moorland,
    RainForest,
    Steppe,
    Swamp,
    Veld,
    Tundra,
    DriftIce],
  quantity: Quantitative.LOW
}
export const Pastures: Resource = {
  name: "pastures",
  sources: [Grazing, Heathland],
  biomes: [Steppe, Veld, Tundra, Desert, Forest],
  quantity: Quantitative.MEDIUM
}

export const Resources: Resource[] = [
  BaseMetals,
  Clay,
  ConstructionStone,
  Fish,
  Furs,
  Game,
  Ivory,
  JemStones,
  Pastures,
  PreciousMetals,
  StapleFruits,
  StapleGrain,
  StapleVegetables,
]