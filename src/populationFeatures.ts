import {Altitude, Amount, PopulationFeature, Quantitative} from "./types.js";
import {Floodplain, Forest, Jungle, LittoralBiomes, Steppe, TerrestrialBiomes, Veld} from "./biomes.js";
import {
  Fields,
  Heathland,
  HuntingGround,
  LoggingField,
  Mine,
  PlacerDeposit,
  Plantations,
  Quarry,
  SurfaceMine
} from "./sources.js";

export const Hamlet: PopulationFeature = {
  name: "hamlet",
  populationRange: [Amount.DOZEN, Amount.KOPA],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.HIGH,
    equator: Quantitative.HIGH
  },
  biomes: [...TerrestrialBiomes, ...LittoralBiomes]
}
export const Village: PopulationFeature = {
  name: "village",
  populationRange: [Amount.KOPA, Amount.HALFMILLE],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.HIGH,
    equator: Quantitative.HIGH
  },
  biomes: [...TerrestrialBiomes, Floodplain]
}
export const Town: PopulationFeature = {
  name: "town",
  populationRange: [Amount.HUNDRED, Amount.GREAT_GROSS],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.HIGH,
    equator: Quantitative.MEDIUM
  },
  biomes: [...TerrestrialBiomes, Floodplain]
}
export const City: PopulationFeature = {
  name: "city",
  populationRange: [Amount.MILLE, Amount.LAKH],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  frequency: {
    polar: Quantitative.NONE,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  biomes: [Steppe, Forest, Veld, Jungle, Floodplain]
};
export const Metropolis: PopulationFeature = {
  name: "great city",
  populationRange: [Amount.LAKH, Amount.CRORE],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS],
  frequency: {
    polar: Quantitative.NONE,
    temperate: Quantitative.NONE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  biomes: [Steppe, Floodplain]
}

export const PopulationCenters = [Hamlet, Village, Hamlet, Town, City, Metropolis]

export const HuntingCamp: PopulationFeature = {
  name: "hunters camp",
  populationRange: [Amount.NONE, Amount.DOZEN],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.MEDIUM,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.MEDIUM,
    equator: Quantitative.MEDIUM
  },
  biomes: [...TerrestrialBiomes],
  sources: [HuntingGround]
}
export const LoggingCamp: PopulationFeature = {
  name: "logging camp",
  populationRange: [Amount.DOZEN, Amount.KOPA],
  altitudes: [Altitude.SEALEVEL, Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  biomes: [...TerrestrialBiomes],
  sources: [LoggingField]
}
export const MiningTown: PopulationFeature = {
  name: "mining town",
  populationRange: [Amount.DOZEN, Amount.HUNDRED],
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  biomes: [...TerrestrialBiomes],
  sources: [Quarry, Mine, SurfaceMine]
}
export const MiningCamp: PopulationFeature = {
  name: "mining camp",
  populationRange: [Amount.NONE, Amount.DOZEN],
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  biomes: [...TerrestrialBiomes],
  sources: [Mine, PlacerDeposit]
}
export const Estate: PopulationFeature = {
  name: "estate",
  populationRange: [Amount.DOZEN, Amount.SCORE],
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.MEDIUM,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.MEDIUM,
    equator: Quantitative.MEDIUM
  },
  biomes: [...TerrestrialBiomes],
  sources: [Fields]
}
export const Plantation: PopulationFeature = {
  name: "plantation",
  populationRange: [Amount.DOZEN, Amount.GROSS],
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.MOUNTAINS],
  frequency: {
    polar: Quantitative.NONE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.HIGH,
    equator: Quantitative.HIGH
  },
  biomes: [...TerrestrialBiomes],
  sources: [Plantations]
}

export const WorkSites: PopulationFeature[] = [HuntingCamp, MiningCamp, MiningTown, Estate, LoggingCamp, Plantation]
