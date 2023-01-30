import {LandFeature} from "./types.js";
import {
  HighlandHills,
  HighlandMountains,
  HighlandPlains,
  LowlandHills,
  LowlandMountains,
  LowlandPlains, MarineDeepOcean, MarineRift, MarineShallows
} from "./topologies.js";

export const Glacier: LandFeature = {
  name: "glacier",
  extra: null,
  topologies: [HighlandMountains, HighlandHills]
}
export const River: LandFeature = {
  name: "river",
  extra: null,
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandMountains, HighlandHills, HighlandPlains]
}
export const Canyon: LandFeature = {
  name: "canyon",
  extra: null,
  topologies: [LowlandHills, HighlandHills, HighlandPlains]
}
export const LandChasm: LandFeature = {
  name: "chasm",
  extra: null,
  topologies: [LowlandHills, HighlandHills, HighlandPlains, LowlandMountains]
}
export const MarineChasm: LandFeature = {
  name: "chasm",
  extra: null,
  topologies: [MarineShallows, MarineDeepOcean, MarineRift]
}
export const LandCrater: LandFeature = {
  name: "crater",
  extra: null,
  topologies: [LowlandHills, HighlandHills, HighlandPlains, LowlandMountains]
}
export const MarineCrater: LandFeature = {
  name: "crater",
  extra: null,
  topologies: [MarineShallows]
}
export const LandVolcano: LandFeature = {
  name: "volcano",
  extra: null,
  topologies: [LowlandHills, HighlandHills, LowlandMountains, HighlandPlains, HighlandHills]
}
export const MarineVolcano: LandFeature = {
  name: "volcano",
  extra: null,
  topologies: [MarineShallows, MarineDeepOcean, MarineRift]
}
export const Delta: LandFeature = {
  name: "delta",
  extra: null,
  topologies: [LowlandPlains]
}
export const GreatLake: LandFeature = {
  name: "great lake",
  extra: null,
  topologies: [LowlandPlains, LowlandHills, HighlandPlains]
}
export const Lake: LandFeature = {
  name: "lake",
  extra: null,
  topologies: [LowlandPlains, LowlandHills, LowlandMountains, HighlandHills, HighlandPlains]
}

export const LandFeatures: LandFeature[] = [
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