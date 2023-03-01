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
  topographies: Topography[]
}

export type PeopleFeature = Feature & {
  biomes: Biome[]
}

export type BiomeFeature = Feature & {
  biomes: Biome[]
}

export type PopulationFeature = PeopleFeature & {
  populationRange: [Amount, Amount]
  sources?: Source[]
}

export type HistoryFeature = PeopleFeature

export enum Landscape { MARINE = "MARINE", TERRESTRIAL = "TERRESTRIAL", LITTORAL = "LITTORAL"}

export enum Altitude {
  HADAL = -6000,
  ABYSS = -4000,
  MESOPELAGIC = -1000,
  PHOTIC = -200,
  SHALLOWS = -10,
  SEALEVEL = 0,
  LOWLANDS = 10,
  FOOTHILLS = 500,
  HIGHLANDS = 1500,
  MOUNTAINS = 3000,
  HIMALAYAS = 6000,
  OLYMPUS = 12000
}

export type Source = {
  name: string
  topographies: Topography[]
  landFeatures: LandFeature[]
}

export type Resource = {
  name: string
  quantity: Quantitative,
  biomes: Biome[]
  sources: Source[]
}

export const AboveSeaLevel = [
  Altitude.FOOTHILLS,
  Altitude.HIGHLANDS,
  Altitude.LOWLANDS,
  Altitude.MOUNTAINS,
  Altitude.HIMALAYAS,
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

export enum Quantitative { "N/A" = 0, NONE = 0, SPARSE, LOW, MEDIUM, HIGH, ABUNDANT, ALWAYS}

export enum Amount {
  NONE = 0,
  DOZEN = 12,
  SCORE = 20,
  KOPA = 60,
  HUNDRED = 120,
  GROSS = 144,
  HALFMILLE = 500,
  MILLE = 1000,
  GREAT_GROSS = 1728,
  MYRIAD = 10_000,
  LAKH = 100_000,
  CRORE = 10_000_000,
}

export type Topography = {
  name: string
  altitudes: Altitude[]
}

export type Biome = {
  name: string
  perspiration: Quantitative
  diversity: Quantitative
  frequency: LatitudeFrequency
  altitudes: Altitude[]
  topographies: Topography[]
}

export type LatitudeSensitive = LandFeature | Biome | BiomeFeature

export type AltitudeSensitive = Feature | Topography | Biome
export type TopographySensitive = LandFeature | Biome


