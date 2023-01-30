export type Feature = {
  name: string
  extra?: any
  frequency: LatitudeFrequency
}

type LatitudeFrequency = {
  polar?: Quantitive
  temperate?: Quantitive
  tropic?: Quantitive
  equator?: Quantitive
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

export enum Landscape { "MARINE"="MARINE", "TERRESTRIAL"="TERRESTRIAL", "LITTORAL"="LITTORAL"}
export enum Delta { "FLAT", "GENTLE", "STEEP", "VERTICAL"}
export enum Latitude { "EQUATOR", "TROPIC", "TEMPERATE", "POLAR"}
export enum Quantitive { "N/A", "NONE", "SPARSE", "LOW", "MEDIUM", "HIGH", "ABUNDANT", "ALWAYS"}

export type Topology = {
  name: string
  landscape: Landscape
  ma: number // mean altitude
  delta: Delta // mean equidistance
}

export type Biome = {
  name: string
  perspiration: Quantitive
  diversity: Quantitive
  frequency: LatitudeFrequency
  topologies: Topology[]
}

export type LatitudeSensitive = LandFeature | Biome | BiomeFeature


