import {Source} from "./types.js";
import {
  Canyon,
  Delta,
  GreatLake, Lake,
  LandChasm,
  LandCrater,
  LandVolcano,
  MarineChasm,
  MarineCrater, River
} from "./landscapeFeatures";
import {
  FeatureLess,
  Hills,
  MarineRift,
  MarineTopographies,
  Mudflats,
  Plains,
  Ridges,
  Shoals,
  Summit
} from "./topography";
import {KelpForest} from "./biomes";

export const Quarry: Source = {
  name: "quarry",
  topographies: [Hills, Plains, Ridges],
  landFeatures: [Canyon]
}
export const SurfaceMine: Source = {
  name: "surface mine",
  topographies: [Hills, Plains, Ridges],
  landFeatures: [Canyon, LandCrater, LandVolcano]
}
export const Mine: Source = {
  name: "mine",
  topographies: [Hills, Ridges],
  landFeatures: [Canyon, LandChasm],
}
export const PlacerDeposit: Source = {
  name: "place deposit",
  topographies: [Hills, Ridges, Plains, Shoals],
  landFeatures: [River, Delta, Canyon],
}
export const HuntingGround: Source = {
  name: "hunting ground",
  topographies: [Hills, Ridges, Plains, Shoals, Mudflats, Summit],
  landFeatures: [LandChasm, LandCrater, Delta, Canyon],
}
export const Fields: Source = {
  name: "fields",
  topographies: [Hills, Plains],
  landFeatures: [Delta, Lake, GreatLake, River],
}
export const Plantations: Source = {
  name: "plantations",
  topographies: [Hills, Ridges, Plains],
  landFeatures: [Delta, Lake, River],
}

export const FishingGrounds: Source = {
  name: "fishing ground",
  topographies: [...MarineTopographies, Shoals, Mudflats],
  landFeatures: [MarineChasm, MarineCrater, Delta, GreatLake, Lake],
}

export const Heathland: Source = {
  name: "heatland",
  topographies: [Hills, Plains, Ridges],
  landFeatures: [],
}

export const Grazing: Source = {
  name: "grazing",
  topographies: [Hills, Plains, Ridges],
  landFeatures: [],
}