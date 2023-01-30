type Feature = {
  name: string
  extra?: any
}

export type LandFeature = Feature & {
  topologies: Topology[]
}

type PeopleFeature = Feature & {
  age: number
}

export type PopulationFeature = PeopleFeature & {
  population: number
  health: number
}

export type HistoryFeature = PeopleFeature

export enum Landscape { "MARINE", "TERRESTIAL", "LITTORAL"}
export enum Delta { "FLAT", "GENTLE", "STEEP", "VERTICAL"}
export enum Quantitive { "N/A", "NONE", "SPARSE", "LOW", "MEDIUM", "HIGH", "RICH"}

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
  topologies: Topology[]
}



