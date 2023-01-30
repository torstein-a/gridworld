import {LandFeature, Quantitive} from "./types.js";
import {
  HighlandHills,
  HighlandMountains,
  HighlandPlains,
  LowlandHills,
  LowlandMountains,
  LowlandPlains,
  MarineDeepOcean,
  MarineRift,
  MarineShallows
} from "./topologies.js";

export const Featureless: LandFeature = {
  name: "none",
  extra: null,
  frequency: {
    polar: Quantitive.LOW,
    temperate: Quantitive.LOW,
    tropic: Quantitive.LOW,
    equator: Quantitive.LOW
  },
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandMountains, HighlandHills, HighlandPlains, MarineRift, MarineShallows, MarineDeepOcean]
}
export const Glacier: LandFeature = {
  name: "glacier",
  extra: null,
  frequency: {polar: Quantitive.ABUNDANT, temperate: Quantitive.LOW},
  topologies: [HighlandMountains, HighlandHills]
}
export const River: LandFeature = {
  name: "river",
  extra: null,
  frequency: {
    polar: Quantitive.MEDIUM,
    temperate: Quantitive.MEDIUM,
    tropic: Quantitive.HIGH,
    equator: Quantitive.MEDIUM
  },
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandMountains, HighlandHills, HighlandPlains]
}
export const Canyon: LandFeature = {
  name: "canyon",
  extra: null,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.LOW, tropic: Quantitive.LOW, equator: Quantitive.LOW},
  topologies: [LowlandHills, HighlandHills, HighlandPlains]
}
export const LandChasm: LandFeature = {
  name: "chasm",
  extra: null,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.LOW, tropic: Quantitive.LOW, equator: Quantitive.LOW},
  topologies: [LowlandHills, HighlandHills, HighlandPlains, LowlandMountains]
}
export const MarineChasm: LandFeature = {
  name: "undersea chasm",
  extra: null,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.LOW, tropic: Quantitive.LOW, equator: Quantitive.LOW},
  topologies: [MarineShallows, MarineDeepOcean, MarineRift]
}
export const LandCrater: LandFeature = {
  name: "crater",
  extra: null,
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.LOW
  },
  topologies: [LowlandHills, HighlandHills, HighlandPlains, LowlandMountains]
}
export const MarineCrater: LandFeature = {
  name: "undersea crater",
  extra: null,
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.LOW
  },

  topologies: [MarineShallows]
}
export const LandVolcano: LandFeature = {
  name: "volcano",
  extra: null,
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },

  topologies: [LowlandHills, HighlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const MarineVolcano: LandFeature = {
  name: "undersea volcano",
  extra: null,
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.LOW
  },

  topologies: [MarineShallows, MarineDeepOcean, MarineRift]
}
export const Delta: LandFeature = {
  name: "delta",
  extra: null,
  frequency: {
    polar: Quantitive.SPARSE,
    temperate: Quantitive.SPARSE,
    tropic: Quantitive.SPARSE,
    equator: Quantitive.SPARSE
  },

  topologies: [LowlandPlains]
}
export const GreatLake: LandFeature = {
  name: "great lake",
  extra: null,
  frequency: {polar: Quantitive.LOW, temperate: Quantitive.LOW, tropic: Quantitive.LOW, equator: Quantitive.LOW},

  topologies: [LowlandPlains, LowlandHills, HighlandPlains]
}
export const Lake: LandFeature = {
  name: "lake",
  extra: null,
  frequency: {
    polar: Quantitive.MEDIUM,
    temperate: Quantitive.MEDIUM,
    tropic: Quantitive.MEDIUM,
    equator: Quantitive.MEDIUM
  },

  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandHills, HighlandPlains]
}

export const LandFeatures: LandFeature[] = [
  Featureless,
  Canyon,
  Delta,
  Glacier,
  GreatLake,
  Lake,
  LandChasm,
  LandChasm,
  LandCrater,
  LandVolcano,
  MarineChasm,
  MarineCrater,
  MarineVolcano,
  River,
]