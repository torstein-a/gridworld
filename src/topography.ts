import {AboveSeaLevel, Altitude, BelowSeaLevel, Delta, Landscape, Topography} from "./types.js";

export const FeatureLess: Topography = {
  name: "none",
  altitudes: [...AboveSeaLevel, ...BelowSeaLevel],
  delta: Delta.FLAT,
}

export const MarineRift: Topography = {
  name: "rift",
  altitudes: [Altitude.HADAL],
  delta: Delta.VERTICAL,
}

export const Trenches: Topography = {
  name: "oceanic trenches",
  altitudes: [Altitude.ABYSS, Altitude.PHOTIC, Altitude.MESOPELAGIC],
  delta: Delta.STEEP,
}

export const Reefs: Topography = {
  name: "reefs",
  altitudes: [Altitude.PHOTIC, Altitude.SHALLOWS],
  delta: Delta.FLAT,
}

export const MarineTopologies = [FeatureLess, MarineRift, Trenches, Reefs]

export const Plains = {
  name: "plains",
  landscape: Landscape.TERRESTRIAL,
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
  delta: Delta.FLAT,
}
export const Hills = {
  name: "hills",
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS, Altitude.FOOTHILLS],
  delta: Delta.GENTLE
}
export const Ridges = {
  name: "ridges",
  altitudes: [Altitude.HIGHLANDS, Altitude.MOUNTAINS, Altitude.FOOTHILLS],
  delta: Delta.STEEP
}
export const Crags = {
  name: "crags",
  altitudes: [Altitude.MOUNTAINS],
  delta: Delta.STEEP
}
export const Summit = {
  name: "summit",
  altitudes: [Altitude.MOUNTAINS],
  delta: Delta.STEEP
}
export const UnreachableSummit = {
  name: "unreachable summit",
  altitudes: [Altitude.OLYMPUS],
  delta: Delta.VERTICAL
}

export const TerrestrialTopologies = [Plains, Hills, Ridges, Summit, UnreachableSummit]


