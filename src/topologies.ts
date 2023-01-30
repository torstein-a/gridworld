import {Delta, Landscape, Topology} from "./types.js";

export const MarineRift: Topology = {
  name: "rift",
  landscape: Landscape.MARINE,
  ma: -1000,
  delta: Delta.VERTICAL,
}

export const MarineDeepOcean: Topology = {
  name: "deep sea",
  landscape: Landscape.MARINE,
  ma: -100,
  delta: Delta.GENTLE,
}

export const MarineShallows: Topology = {
  name: "shallows",
  landscape: Landscape.MARINE,
  ma: -10,
  delta: Delta.FLAT,
}

export const MarineTopologies = [MarineRift, MarineDeepOcean, MarineShallows]

export const LowlandPlains = {
  name: "lowland plains",
  landscape: Landscape.TERRESTIAL,
  ma: 10,
  delta: Delta.FLAT,
}
export const LowlandHills = {
  name: "lowland hills",
  landscape: Landscape.TERRESTIAL,
  ma: 50,
  delta: Delta.GENTLE
}
export const LowlandMountains = {
  name: "lowland mountains",
  landscape: Landscape.TERRESTIAL,
  ma: 500,
  delta: Delta.STEEP
}
export const HighlandPlains = {
  name: "highland plains",
  landscape: Landscape.TERRESTIAL,
  ma: 500,
  delta: Delta.GENTLE
}
export const HighlandHills = {
  name: "highland hills",
  landscape: Landscape.TERRESTIAL,
  ma: 500,
  delta: Delta.STEEP
}
export const HighlandMountains = {
  name: "highland mountains",
  landscape: Landscape.TERRESTIAL,
  ma: 2000,
  delta: Delta.STEEP
}

export const TerrestialTopologies = [LowlandHills, LowlandMountains, LowlandPlains,
  HighlandMountains, HighlandHills, HighlandPlains]


