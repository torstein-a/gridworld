import {
  Altitude,
  Biome,
  BiomeFeature,
  HistoryFeature,
  LandFeature,
  Landscape,
  Latitude,
  PopulationFeature,
  Topography
} from "./types.js";

export interface Grid {
  size_x: number,
  size_y: number,
  maxima: number,
  minima: number,
  cells: Cell[]
}

export interface Cell {
  altitude: Altitude
  latitude: Latitude
  topography?: Topography
  biome?: Biome
  biomeFeatures?: BiomeFeature[]
  landFeatures?: LandFeature[]
  populationFeature?: PopulationFeature
  historyEvent?: HistoryFeature
  neighbours: {
    n:number,
    ne:number,
    e:number,
    se:number,
    s:number,
    sw:number,
    w:number,
    nw:number,
  },
  decals: string[]
  isCoastal?: boolean
}

export const isMarine = (cell: Cell): boolean => !!cell.altitude && cell.altitude < 0
export const isTerrestrial = (cell: Cell): boolean => !!cell.altitude && cell.altitude > 0
