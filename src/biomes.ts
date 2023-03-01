import {Altitude, BelowSeaLevel, Biome, Quantitative} from "./types.js";
import {
  Hills,
  LittoralTopographies,
  MarineRift,
  MarineTopographies,
  Plains,
  Reefs,
  Ridges,
  Shoals,
  Summit,
  Trenches,
  UnreachableSummit
} from "./topography.js";

export const HighAltitudeDeadlands: Biome = {
  name: "deadzone",
  diversity: Quantitative.NONE,
  perspiration: Quantitative.NONE,
  frequency: {polar: Quantitative.HIGH, temperate: Quantitative.HIGH, tropic: Quantitative.HIGH, equator: Quantitative.HIGH},
  topographies: [UnreachableSummit, Summit],
  altitudes: [Altitude.OLYMPUS, Altitude.HADAL]
}

export const Desert: Biome = {
  name: "desert",
  diversity: Quantitative.SPARSE,
  perspiration: Quantitative.NONE,
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills]
}
export const Wasteland: Biome = {
  name: "wasteland",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.SPARSE,
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.SPARSE, tropic: Quantitative.SPARSE},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS, Altitude.HIMALAYAS],
  topographies: [Plains, Hills, Ridges, Summit]
}
export const Steppe: Biome = {
  name: "steppe",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.LOW,
  frequency: {temperate: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills]
}
export const Veld: Biome = {
  name: "veld",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.LOW,
  frequency: {temperate: Quantitative.LOW, equator: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills]
}
export const Forest: Biome = {
  name: "forest",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.MEDIUM,
  frequency: {polar: Quantitative.MEDIUM, temperate: Quantitative.HIGH},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  topographies: [Plains, Hills, Ridges]
}
export const Jungle: Biome = {
  name: "jungle",
  diversity: Quantitative.HIGH,
  perspiration: Quantitative.HIGH,
  frequency: {equator: Quantitative.MEDIUM, temperate: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS, Altitude.MOUNTAINS],
  topographies: [Plains, Hills, Ridges]
}
export const RainForest: Biome = {
  name: "rain forest",
  diversity: Quantitative.ABUNDANT,
  perspiration: Quantitative.ABUNDANT,
  frequency: {equator: Quantitative.HIGH, temperate: Quantitative.SPARSE},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills, Ridges]
}
export const Swamp: Biome = {
  name: "swamp",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.SPARSE, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.LOWLANDS,],
  topographies: [Plains]
}
export const Moorland: Biome = {
  name: "moorland",
  diversity: Quantitative.SPARSE,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.MEDIUM, temperate: Quantitative.LOW},
  altitudes: [Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills, Ridges]
}
export const Fen: Biome = {
  name: "fen",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.SPARSE},
  altitudes: [Altitude.HIGHLANDS],
  topographies: [Plains]
}
export const Tundra: Biome = {
  name: "tundra",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.MEDIUM,
  frequency: {polar: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.FOOTHILLS, Altitude.HIGHLANDS],
  topographies: [Plains, Hills, Ridges]
}
export const Floodplain: Biome = {
  name: "tundra",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.MEDIUM,
  frequency: {temperate: Quantitative.LOW, tropic: Quantitative.MEDIUM, equator: Quantitative.MEDIUM},
  altitudes: [Altitude.LOWLANDS, Altitude.SEALEVEL],
  topographies: [Plains]
}

export const TerrestrialBiomes: Biome[] = [
  Desert,
  Fen,
  Floodplain,
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
  topographies: [Trenches, Reefs]
}
export const KelpForest: Biome = {
  name: "kelp forest",
  diversity: Quantitative.HIGH,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.MEDIUM, tropic: Quantitative.MEDIUM, equator: Quantitative.LOW},
  altitudes: [Altitude.SHALLOWS, Altitude.PHOTIC],
  topographies: [Trenches, Reefs],
}
export const SeagrassMeadow: Biome = {
  name: "seagrass meadow",
  diversity: Quantitative.HIGH,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.MEDIUM, tropic: Quantitative.MEDIUM, equator: Quantitative.LOW},
  altitudes: [Altitude.SHALLOWS, Altitude.PHOTIC, Altitude.SEALEVEL],
  topographies: [Trenches, Reefs, Shoals],
}
export const ThermalVent: Biome = {
  name: "thermal vents",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.MESOPELAGIC, Altitude.ABYSS, Altitude.HADAL],
  topographies: [Trenches, MarineRift],
}
export const MarineDeadzone: Biome = {
  name: "deadzone",
  diversity: Quantitative.NONE,
  perspiration: Quantitative["N/A"],
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.LOW, equator: Quantitative.LOW},
  altitudes: [Altitude.ABYSS, Altitude.HADAL],
  topographies: [Trenches, MarineRift, Reefs],
}
export const DriftIce: Biome = {
  name: "drift ice",
  diversity: Quantitative.SPARSE,
  perspiration: Quantitative.SPARSE,
  frequency: {polar: Quantitative.MEDIUM},
  altitudes: [...BelowSeaLevel, Altitude.SEALEVEL],
  topographies: [...MarineTopographies, ...LittoralTopographies ],
}

export const MarineBiomes: Biome[] = [CoralReef, KelpForest, ThermalVent, MarineDeadzone]

export const MangroveForest: Biome = {
  name: "mangrove forest",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.NONE, temperate: Quantitative.SPARSE, tropic: Quantitative.HIGH, equator: Quantitative.MEDIUM},
  altitudes: [Altitude.SEALEVEL],
  topographies: [Shoals]
}
export const Marshland: Biome = {
  name: "march land",
  diversity: Quantitative.MEDIUM,
  perspiration: Quantitative.HIGH,
  frequency: {polar: Quantitative.SPARSE, temperate: Quantitative.LOW, tropic: Quantitative.SPARSE, equator: Quantitative.NONE},
  altitudes: [Altitude.SEALEVEL],
  topographies: [Shoals]
}
export const Mudflats: Biome = {
  name: "march land",
  diversity: Quantitative.LOW,
  perspiration: Quantitative.MEDIUM,
  frequency: {polar: Quantitative.LOW, temperate: Quantitative.LOW, tropic: Quantitative.SPARSE, equator: Quantitative.NONE},
  altitudes: [Altitude.SEALEVEL],
  topographies: [Shoals]
}

export const LittoralBiomes: Biome[] = [Floodplain, MangroveForest, Marshland, SeagrassMeadow, Mudflats]