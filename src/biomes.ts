import {Altitude, Biome, Quantitative} from "./types.js";
import {Hills, MarineRift, Plains, Reefs, Ridges, Summit, Trenches, UnreachableSummit} from "./topologies.js";

export const HighAltitudeDeadlands: Biome = {
  name: "deadzone",
  diversity: Quantitative.NONE,
  perspiration: Quantitative.NONE,
  frequency: {polar: Quantitative.HIGH, temperate: Quantitative.HIGH, tropic: Quantitative.HIGH, equator: Quantitative.HIGH},
  topologies: [UnreachableSummit, Summit],
  altitudes: [Altitude.OLYMPUS, Altitude.HADAL]
}

export const Desert: Biome = {
  name: "desert",
  diversity: Quantitative.SPARSE,
  perspiration: Quantitative.NONE,
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills]
}
export const Wasteland: Biome = {
  name: "wasteland",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.SPARSE,
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.SPARSE, tropic: Quantitative.SPARSE},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  topologies: [Plains, Hills, Ridges, Summit]
}
export const Steppe: Biome = {
  name: "steppe",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.LOW,
  frequency: {temperate: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills]
}
export const Veld: Biome = {
  name: "veld",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.LOW,
  frequency: {temperate: Quantitative.LOW, equator: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills]
}
export const Forest: Biome = {
  name: "forest",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.MEDIUM,
  frequency: {polar: Quantitative.MEDIUM, temperate: Quantitative.HIGH},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  topologies: [Plains, Hills, Ridges]
}
export const Jungle: Biome = {
  name: "jungle",
  diversity: Quantitative.HIGH,
  perspiration: Quantitative.HIGH,
  frequency: {equator: Quantitative.MEDIUM, temperate: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  topologies: [Plains, Hills, Ridges]
}
export const RainForest: Biome = {
  name: "rain forest",
  diversity: Quantitative.ABUNDANT,
  perspiration: Quantitative.ABUNDANT,
  frequency: {equator: Quantitative.HIGH, temperate: Quantitative.SPARSE},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills, Ridges]
}
export const Swamp: Biome = {
  name: "swamp",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.SPARSE, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS,],
  topologies: [Plains]
}
export const Moorland: Biome = {
  name: "moorland",
  diversity: Quantitative.SPARSE,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.MEDIUM, temperate: Quantitative.LOW},
  altitudes: [Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills, Ridges]
}
export const Fen: Biome = {
  name: "fen",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.SPARSE},
  altitudes: [Altitude.HIGHLANDS],
  topologies: [Plains]
}
export const Tundra: Biome = {
  name: "tundra",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.MEDIUM,
  frequency: {polar: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topologies: [Plains, Hills, Ridges]
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

export const CoralReef: Biome = {
  name: "coral reef",
  diversity: Quantitative.ABUNDANT,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.LOW, tropic: Quantitative.HIGH, equator: Quantitative.ABUNDANT},
  altitudes: [Altitude.SHALLOWS, Altitude.PHOTIC, Altitude.ABYSS],
  topologies: [Trenches, Reefs]
}
export const KelpForest: Biome = {
  name: "kelp forest",
  diversity: Quantitative.HIGH,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.MEDIUM, tropic: Quantitative.MEDIUM, equator: Quantitative.LOW},
  altitudes: [Altitude.SHALLOWS, Altitude.PHOTIC],
  topologies: [Trenches, Reefs],
}
export const TermicVents: Biome = {
  name: "TermicVents",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.MESOPELAGIC, Altitude.ABYSS, Altitude.HADAL],
  topologies: [Trenches, MarineRift],
}
export const MarineDeadzone: Biome = {
  name: "deadzone",
  diversity: Quantitative.NONE,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.ABYSS, Altitude.HADAL],
  topologies: [Trenches, MarineRift, Reefs],
}

export const MarineBiomes: Biome[] = [CoralReef, KelpForest, TermicVents, MarineDeadzone]