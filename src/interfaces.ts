import {Biome, HistoryFeature, LandFeature, Landscape, PopulationFeature, Topology} from "./types.js";

export interface Grid {
  size_x: number,
  size_y: number,
  cells: Cell[]
}

export interface Cell {
  landscape?: Landscape
  topology?: Topology
  biome?: Biome
  landFeature?: LandFeature
  populationFeature?: PopulationFeature
  historyEvent?: HistoryFeature
}

