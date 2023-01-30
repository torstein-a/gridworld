import {Cell} from "./interfaces.js";
import {coinflip, draw} from "./util.js";
import {Biome, LandFeature, Landscape, Topology} from "./types.js";
import {TerrestrialBiomes} from "./biomes.js";
import {MarineTopologies, TerrestialTopologies} from "./topologies.js";
import {LandFeatures} from "./landscapeFeatures.js";


const cell: Cell = {}

cell.landscape = coinflip() ? Landscape.MARINE : Landscape.TERRESTIAL

if (cell.landscape == Landscape.TERRESTIAL) {
  const topology = draw(TerrestialTopologies) as Topology
  cell.topology = topology
  cell.biome = draw(TerrestrialBiomes.filter(b => b.topologies.map(t => t.name).includes(topology.name))) as Biome
  cell.landFeature = draw(LandFeatures.filter(f => f.topologies.map(t => t.name).includes(topology.name))) as LandFeature
} else if (cell.landscape == Landscape.MARINE) {
  const topology = draw(TerrestialTopologies) as Topology
  cell.topology = topology
  cell.landFeature = draw(LandFeatures.filter(f => f.topologies.map(t => t.name).includes(topology.name))) as LandFeature
}

console.log(cell)
