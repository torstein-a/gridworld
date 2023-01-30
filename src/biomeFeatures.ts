import {BiomeFeature, Quantitive} from "./types.js";
import {
  Desert,
  Fen,
  Forest,
  HighAltitudeDeadlands,
  Jungle,
  Moorland,
  RainForest, Steppe,
  Swamp,
  Veld,
  Wasteland
} from "./biomes.js";

export const Featureless: BiomeFeature = {
  name: "none",
  extra: null,
  biomes: [
    Desert,
    Fen,
    Forest,
    HighAltitudeDeadlands,
    Jungle,
    Moorland,
    RainForest,
    Steppe,
    Swamp,
    Veld,
    Wasteland],
  frequency: {
    polar: Quantitive.LOW,
    temperate: Quantitive.LOW,
    tropic: Quantitive.LOW,
    equator: Quantitive.LOW
  },
}


export const Cenote: BiomeFeature = {
  name: "cenote",
  extra: null,
  biomes: [Jungle, RainForest, Swamp, Forest, Fen, Moorland],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const Sinkhole: BiomeFeature = {
  name: "sinkhole",
  extra: null,
  biomes: [Desert, Wasteland, Moorland, Veld],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const SweetWaterSpring: BiomeFeature = {
  name: "sweet-water spring",
  extra: null,
  biomes: [Desert, Wasteland, Swamp, Jungle, Forest, Moorland, Veld],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const Oasis: BiomeFeature = {
  name: "oasis",
  extra: null,
  biomes: [Desert],
  frequency: {
    polar: Quantitive.NONE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const PetrifiedForest: BiomeFeature = {
  name: "petrified forest",
  extra: null,
  biomes: [Desert, Wasteland],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const Mesa: BiomeFeature = {
  name: "mesa",
  extra: null,
  biomes: [Desert, Jungle, RainForest],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.LOW
  },
}

export const Butte: BiomeFeature = {
  name: "butte",
  extra: null,
  biomes: [
    Desert,
    Fen,
    Forest,
    Jungle,
    Moorland,
    RainForest,
    Steppe,
    Swamp,
    Veld,
    Wasteland,],
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },
}

export const TerrestialBiomeFeatures:BiomeFeature[] = [
  Butte,
  Cenote,
  Featureless,
  Mesa,
  Oasis,
  PetrifiedForest,
  Sinkhole,
  SweetWaterSpring,
]
