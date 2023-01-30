import {
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
  cells: Cell[]
}

export interface Cell {
  landscape?: Landscape
  latitude?: Latitude
  topology?: Topology
  biome?: Biome
  biomeFeatures?: BiomeFeature[]
  landFeatures?: LandFeature[]
  populationFeature?: PopulationFeature
  historyEvent?: HistoryFeature
}

