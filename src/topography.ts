import {AboveSeaLevel, Altitude, BelowSeaLevel, Topography} from "./types.js";

export const FeatureLess: Topography = {
  name: "none",
  altitudes: [...AboveSeaLevel, Altitude.SEALEVEL, ...BelowSeaLevel],
}

export const MarineRift: Topography = {
  name: "rift",
  altitudes: [Altitude.HADAL],
}

export const Trenches: Topography = {
  name: "oceanic trenches",
  altitudes: [Altitude.ABYSS, Altitude.PHOTIC, Altitude.MESOPELAGIC],
}

export const Reefs: Topography = {
  name: "reefs",
  altitudes: [Altitude.PHOTIC, Altitude.SHALLOWS],
}

export const MarineTopographies = [FeatureLess, MarineRift, Trenches, Reefs]

export const Plains: Topography = {
  name: "plains",
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS],
}
export const Hills: Topography = {
  name: "hills",
  altitudes: [Altitude.LOWLANDS, Altitude.HIGHLANDS, Altitude.FOOTHILLS],
}
export const Ridges: Topography = {
  name: "ridges",
  altitudes: [Altitude.HIGHLANDS, Altitude.MOUNTAINS, Altitude.FOOTHILLS],
}
export const Crags: Topography = {
  name: "crags",
  altitudes: [Altitude.MOUNTAINS],
}
export const Summit: Topography = {
  name: "summit",
  altitudes: [Altitude.MOUNTAINS, Altitude.HIMALAYAS],
}
export const UnreachableSummit: Topography = {
  name: "unreachable summit",
  altitudes: [Altitude.OLYMPUS],
}

export const TerrestrialTopographies = [Plains, Hills, Ridges, Summit, UnreachableSummit]

export const Shoals: Topography = {
  name: "shoals",
  altitudes: [Altitude.SEALEVEL],
}
export const Mudflats: Topography = {
  name: "mudflats",
  altitudes: [Altitude.SEALEVEL],
}

export const LittoralTopographies= [Shoals, Mudflats]