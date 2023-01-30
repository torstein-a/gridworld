import {Biome, Quantitive} from "./types.js";
import {
  HighlandHills,
  HighlandMountains,
  HighlandPlains,
  LowlandHills,
  LowlandMountains,
  LowlandPlains
} from "./topologies.js";

export const HighAltitudeDeadlands: Biome = {
  name: "deadzone",
  diversity: Quantitive.NONE,
  perspiration: Quantitive.SPARSE,
  topologies: [HighlandMountains]
}

export const Desert: Biome = {
  name: "desert",
  diversity: Quantitive.SPARSE,
  perspiration: Quantitive.NONE,
  topologies: [LowlandPlains, LowlandHills, HighlandPlains, HighlandHills]
}
export const Wasteland: Biome = {
  name: "wasteland",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.SPARSE,
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const Steppe: Biome = {
  name: "steppe",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.LOW,
  topologies: [LowlandPlains, LowlandHills, HighlandPlains]
}
export const Savanna: Biome = {
  name: "savanna",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.LOW,
  topologies: [LowlandPlains, LowlandHills]
}
export const Forest: Biome = {
  name: "forest",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.MEDIUM,
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const Jungle: Biome = {
  name: "jungle",
  diversity: Quantitive.HIGH,
  perspiration: Quantitive.HIGH,
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains]
}
export const RainForest: Biome = {
  name: "rain forest",
  diversity: Quantitive.RICH,
  perspiration: Quantitive.RICH,
  topologies: [LowlandPlains, LowlandHills]
}
export const Swamp: Biome = {
  name: "swamp",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.HIGH,
  topologies: [LowlandPlains]
}
export const Moorland: Biome = {
  name: "moorland",
  diversity: Quantitive.SPARSE,
  perspiration: Quantitive.HIGH,
  topologies: [LowlandMountains, HighlandHills, HighlandPlains]
}
export const Fen: Biome = {
  name: "fen",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.HIGH,
  topologies: [HighlandPlains]
}

export const TerrestrialBiomes: Biome[] = [
  Desert,
  Fen,
  Forest,
  HighAltitudeDeadlands,
  Jungle,
  Moorland,
  RainForest,
  Savanna,
  Steppe,
  Swamp,
  Wasteland,
]

