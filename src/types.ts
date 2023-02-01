export type Feature = {
  name: string
  extra?: any
  frequency: LatitudeFrequency
  altitudes: Altitude[]
}

type LatitudeFrequency = {
  polar?: Quantitative
  temperate?: Quantitative
  tropic?: Quantitative
  equator?: Quantitative
}

export type LandFeature = Feature & {
  topologies: Topology[]
}

type PeopleFeature = Feature & {
  age: number
}

export type BiomeFeature = Feature & {
  biomes: Biome[]
}

export type PopulationFeature = PeopleFeature & {
  population: number
  health: number
}

export type HistoryFeature = PeopleFeature

export enum Landscape { MARINE = "MARINE", TERRESTRIAL = "TERRESTRIAL", LITTORAL = "LITTORAL"}

export enum Delta {FLAT, GENTLE, STEEP, VERTICAL}

export enum Altitude {
  HADAL = -6000,
  ABYSS = -4000,
  MESOPELAGIC = -1000,
  PHOTIC = -200,
  SHALLOWS = -10,
  SEALEVEL = 0,
  LOWLANDS = 10,
  FOOTHILLS = 500,
  HIGHLANDS = 1000,
  MOUNTAINS = 4000,
  OLYMPUS = 10000
}

export const AboveSeaLevel = [
  Altitude.FOOTHILLS,
  Altitude.HIGHLANDS,
  Altitude.LOWLANDS,
  Altitude.MOUNTAINS,
  Altitude.OLYMPUS,
]
export const BelowSeaLevel = [
  Altitude.ABYSS,
  Altitude.HADAL,
  Altitude.MESOPELAGIC,
  Altitude.PHOTIC,
  Altitude.SHALLOWS,
]

export enum Latitude { EQUATOR, TROPIC, TEMPERATE, POLAR}

export enum Quantitative { "N/A", NONE, SPARSE, LOW, MEDIUM, HIGH, ABUNDANT, ALWAYS}

export type Topology = {
  name: string
  altitudes: Altitude[]
  delta: Delta // mean equidistance
}

export type Biome = {
  name: string
  perspiration: Quantitative
  diversity: Quantitative
  frequency: LatitudeFrequency
  altitudes: Altitude[]
  topologies: Topology[]
}

export type LatitudeSensitive = LandFeature | Biome | BiomeFeature

export type AltitudeSensitive = Feature | Topology | Biome
export type TopologySensitive = LandFeature | Biome


