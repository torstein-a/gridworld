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
  frequency: {polar: Quantitive.HIGH, temperate: Quantitive.HIGH, tropic: Quantitive.HIGH, equator: Quantitive.HIGH},
  topologies: [HighlandMountains]
}

export const Desert: Biome = {
  name: "desert",
  diversity: Quantitive.SPARSE,
  perspiration: Quantitive.NONE,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.LOW, tropic: Quantitive.LOW, equator: Quantitive.LOW},
  topologies: [LowlandPlains, LowlandHills, HighlandPlains, HighlandHills]
}
export const Wasteland: Biome = {
  name: "wasteland",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.SPARSE,
  frequency: {polar: Quantitive.SPARSE, temperate: Quantitive.SPARSE, tropic: Quantitive.SPARSE},
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const Steppe: Biome = {
  name: "steppe",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.LOW,
  frequency: {temperate: Quantitive.MEDIUM},
  topologies: [LowlandPlains, LowlandHills, HighlandPlains]
}
export const Veld: Biome = {
  name: "veld",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.LOW,
  frequency: {temperate: Quantitive.LOW, equator: Quantitive.MEDIUM},
  topologies: [LowlandPlains, HighlandPlains]
}
export const Forest: Biome = {
  name: "forest",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.MEDIUM,
  frequency: {polar: Quantitive.MEDIUM, temperate: Quantitive.HIGH},
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const Jungle: Biome = {
  name: "jungle",
  diversity: Quantitive.HIGH,
  perspiration: Quantitive.HIGH,
  frequency: {equator: Quantitive.MEDIUM, temperate: Quantitive.LOW},
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandPlains]
}
export const RainForest: Biome = {
  name: "rain forest",
  diversity: Quantitive.ABUNDANT,
  perspiration: Quantitive.ABUNDANT,
  frequency: {equator: Quantitive.HIGH, temperate: Quantitive.SPARSE},
  topologies: [LowlandPlains, LowlandHills]
}
export const Swamp: Biome = {
  name: "swamp",
  diversity: Quantitive.MEDIUM,
  perspiration: Quantitive.HIGH,
  frequency: {polar: Quantitive.SPARSE, temperate: Quantitive.SPARSE, tropic: Quantitive.LOW, equator: Quantitive.LOW},
  topologies: [LowlandPlains]
}
export const Moorland: Biome = {
  name: "moorland",
  diversity: Quantitive.SPARSE,
  perspiration: Quantitive.HIGH,
  frequency: {polar: Quantitive.MEDIUM, temperate: Quantitive.LOW},
  topologies: [LowlandMountains, HighlandHills, HighlandPlains]
}
export const Fen: Biome = {
  name: "fen",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.HIGH,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.SPARSE},
  topologies: [HighlandPlains]
}
export const Tundra: Biome = {
  name: "tundra",
  diversity: Quantitive.LOW,
  perspiration: Quantitive.MEDIUM,
  frequency: {polar: Quantitive.MEDIUM},
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
  Steppe,
  Swamp,
  Veld,
  Tundra,
  Wasteland,
]

