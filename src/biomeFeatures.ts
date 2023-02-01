import {AboveSeaLevel, Altitude, BelowSeaLevel, BiomeFeature, Quantitative} from "./types.js";
import {
  Desert,
  Fen,
  Forest,
  Jungle,
  MarineBiomes,
  Moorland,
  RainForest,
  Steppe,
  Swamp,
  TerrestrialBiomes, Tundra,
  Veld,
  Wasteland
} from "./biomes.js";

export const Featureless: BiomeFeature = {
  name: "none",
  extra: null,
  biomes: [
    ...MarineBiomes, ...TerrestrialBiomes],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [...AboveSeaLevel, ...BelowSeaLevel]
}

export const Cenote: BiomeFeature = {
  name: "cenote",
  extra: null,
  biomes: [Jungle, RainForest, Swamp, Forest, Fen, Moorland],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const Sinkhole: BiomeFeature = {
  name: "sinkhole",
  extra: null,
  biomes: [Desert, Wasteland, Moorland, Veld],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const SweetWaterSpring: BiomeFeature = {
  name: "sweet-water spring",
  extra: null,
  biomes: [Desert, Wasteland, Swamp, Jungle, Forest, Moorland, Veld],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const HotSpring: BiomeFeature = {
  name: "hot spring",
  extra: null,
  biomes: [Tundra, Forest, Wasteland],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const Geyser: BiomeFeature = {
  name: "Geyser",
  extra: null,
  biomes: [Tundra, Wasteland],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const Oasis: BiomeFeature = {
  name: "oasis",
  extra: null,
  biomes: [Desert],
  frequency: {
    polar: Quantitative.NONE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS]
}

export const PetrifiedForest: BiomeFeature = {
  name: "petrified forest",
  extra: null,
  biomes: [Desert, Wasteland],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS]
}

export const Mesa: BiomeFeature = {
  name: "mesa",
  extra: null,
  biomes: [Desert, Jungle, RainForest],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.LOW
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS]
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
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS]
}

export const TerrestrialBiomesFeatures:BiomeFeature[] = [
  Butte,
  Cenote,
  Featureless,
  Geyser,
  HotSpring,
  Mesa,
  Oasis,
  PetrifiedForest,
  Sinkhole,
  SweetWaterSpring,
]
