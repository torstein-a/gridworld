import {
  Altitude,
  Biome,
  BiomeFeature,
  HistoryFeature,
  LandFeature,
  Landscape,
  Latitude,
  PopulationFeature,
  Topology
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
  topology?: Topology
  biome?: Biome
  biomeFeatures?: BiomeFeature[]
  landFeatures?: LandFeature[]
  populationFeature?: PopulationFeature
  historyEvent?: HistoryFeature
}

export const isMarine = (cell: Cell): boolean => !!cell.altitude && cell.altitude < 0
export const isTerrestrial = (cell: Cell): boolean => !!cell.altitude && cell.altitude > 0
