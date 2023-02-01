import {AboveSeaLevel, Altitude, BelowSeaLevel, LandFeature, Quantitative} from "./types.js";
import {Hills, MarineRift, Plains, Reefs, Ridges, Trenches} from "./topologies.js";

export const Featureless: LandFeature = {
  name: "none",
  extra: null,
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [
    ...BelowSeaLevel, ...AboveSeaLevel
  ],
  topologies: [MarineRift, Trenches, Reefs, Hills, Ridges]
}
export const Glacier: LandFeature = {
  name: "glacier",
  extra: null,
  frequency: {polar: Quantitative.ABUNDANT, temperate: Quantitative.LOW},
  altitudes: [
    Altitude.HIGHLANDS,
    Altitude.MOUNTAINS,
    Altitude.OLYMPUS,
  ],
  topologies: [Hills, Ridges]
}
export const River: LandFeature = {
  name: "river",
  extra: null,
  frequency: {
    polar: Quantitative.MEDIUM,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.HIGH,
    equator: Quantitative.MEDIUM
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.LOWLANDS,
    Altitude.MOUNTAINS,
  ],
  topologies: [Hills, Ridges, Plains]
}
export const Canyon: LandFeature = {
  name: "canyon",
  extra: null,
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.MOUNTAINS,
  ],
  topologies: [Hills, Plains, Ridges]
}
export const LandChasm: LandFeature = {
  name: "chasm",
  extra: null,
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.MOUNTAINS,
  ],
  topologies: [Hills, Ridges]
}
export const MarineChasm: LandFeature = {
  name: "undersea chasm",
  extra: null,
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.ABYSS,
    Altitude.LOWLANDS,
    Altitude.MESOPELAGIC,
    Altitude.PHOTIC,
  ],
  topologies: [Trenches, MarineRift]
}
export const LandCrater: LandFeature = {
  name: "crater",
  extra: null,
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.LOWLANDS,
    Altitude.MOUNTAINS,
  ],
  topologies: [Hills, Plains, Ridges]
}
export const MarineCrater: LandFeature = {
  name: "undersea crater",
  extra: null,
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.HADAL,
    Altitude.MESOPELAGIC,
    Altitude.PHOTIC,
    Altitude.SHALLOWS,
  ],
  topologies: [Reefs, Trenches]
}
export const LandVolcano: LandFeature = {
  name: "volcano",
  extra: null,
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.LOWLANDS,
    Altitude.MESOPELAGIC,
    Altitude.MOUNTAINS,
  ],
  topologies: [Ridges]
}
export const MarineVolcano: LandFeature = {
  name: "undersea volcano",
  extra: null,
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.ABYSS,
    Altitude.MESOPELAGIC,
    Altitude.PHOTIC,
  ],
  topologies: [Trenches, Reefs]
}
export const Delta: LandFeature = {
  name: "delta",
  extra: null,
  frequency: {
    polar: Quantitative.SPARSE,
    temperate: Quantitative.SPARSE,
    tropic: Quantitative.SPARSE,
    equator: Quantitative.SPARSE
  },
  altitudes: [
    Altitude.LOWLANDS,
    Altitude.SEALEVEL,
  ],
  topologies: [Plains, Ridges, Hills]
}
export const GreatLake: LandFeature = {
  name: "great lake",
  extra: null,
  frequency: {
    polar: Quantitative.LOW,
    temperate: Quantitative.LOW,
    tropic: Quantitative.LOW,
    equator: Quantitative.LOW
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.LOWLANDS,
  ],
  topologies: [Plains, Hills]
}
export const Lake: LandFeature = {
  name: "lake",
  extra: null,
  frequency: {
    polar: Quantitative.MEDIUM,
    temperate: Quantitative.MEDIUM,
    tropic: Quantitative.MEDIUM,
    equator: Quantitative.MEDIUM
  },
  altitudes: [
    Altitude.FOOTHILLS,
    Altitude.HIGHLANDS,
    Altitude.LOWLANDS,
    Altitude.MOUNTAINS,
  ],
  topologies: [Plains, Hills, Ridges]
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