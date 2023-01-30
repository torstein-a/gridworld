import {Grid} from "./interfaces.js";
import {dice, diceflip, draw, drawMultiple, fillArray} from "./util.js";
import {
  Biome,
  BiomeFeature,
  Feature,
  LandFeature,
  Landscape,
  Latitude,
  LatitudeSensitive,
  Quantitive,
  Topology
} from "./types.js";
import {MarineTopologies, TerrestialTopologies} from "./topologies.js";
import {TerrestrialBiomes} from "./biomes.js";
import {Featureless, TerrestialBiomeFeatures} from "./biomeFeatures.js";
import {LandFeatures} from "./landscapeFeatures.js";


function weightedFeatures<T>(features: LatitudeSensitive[], latitude: Latitude): T[] {
  if (features.length == 0) return [Featureless as T]
  const filtered = () => features.filter(feature => {
    switch (latitude) {
      case Latitude.POLAR:
        return diceflip(Quantitive.ALWAYS - (feature.frequency?.polar || 0))
      case Latitude.TEMPERATE:
        return diceflip(Quantitive.ALWAYS - (feature.frequency.temperate || 0))
      case Latitude.TROPIC:
        return diceflip(Quantitive.ALWAYS - (feature.frequency.tropic || 0))
      case Latitude.EQUATOR:
        return diceflip(Quantitive.ALWAYS - (feature.frequency.equator || 0))
    }
  }) as T[]
  let out: T[] = filtered()
  let n = 10

  do {
    out = filtered()
  } while (out.length == 0 && n-- > 0)


  return out.length ? out : [Featureless as T]
}

const world: Grid = {
  size_x: 9,
  size_y: 9,
  cells: []
}

//Set latitudes
const yD = 3.5 / (world.size_y / 2)
for (let y = -3; y < 3.5; y += yD) {
  for (let x = 0; x < world.size_x; x++) {
    world.cells.push({latitude: Math.abs(Math.round(y))})
  }
}

//Fill world
world.cells.forEach(cell => {
  cell.landscape = draw([Landscape.MARINE, Landscape.TERRESTRIAL, Landscape.TERRESTRIAL])
  if (cell.landscape == Landscape.TERRESTRIAL) {
    let topology = draw<Topology>(TerrestialTopologies)
    cell.topology = topology
    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(LandFeatures.filter((lf: LandFeature) => lf.topologies.map(t => t.name).includes(topology.name)),
        cell.latitude as Latitude)
      , dice(2))

    let biome = draw<Biome>(
      weightedFeatures<Biome>(
        TerrestrialBiomes.filter((b: Biome) => b.topologies.map(t => t.name).includes(topology.name)),
        cell.latitude as Latitude)
    )
    cell.biome = biome
    cell.biomeFeatures = drawMultiple<BiomeFeature>(
      weightedFeatures(TerrestialBiomeFeatures.filter((bf: BiomeFeature) => bf.biomes.map(b => b.name).includes(biome.name)),
        cell.latitude as Latitude)
      , dice(2))
  } else {
    let topology = draw<Topology>(MarineTopologies)
    cell.topology = topology
    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(LandFeatures.filter((lf: LandFeature) => lf.topologies.map(t => t.name).includes(topology.name)),
        cell.latitude as Latitude)
      , dice(2))
  }
})


console.log(world)

const map = document.querySelector('#map') as Element
map.setAttribute('style', `grid: auto-flow / ${fillArray(world.size_x, '1fr').join(' ')}`)

world.cells.forEach(cell => {
  const el = document.createElement('div')
  el.classList.add('cell', `l-${cell.landscape}`)
  el.innerHTML = (cell.topology?.name || "") + "<br>" + cell.landFeatures?.map(f => f.name).join('<br>')
    + "<br>" + (cell.biome?.name || "") + "<br>" + cell.biomeFeatures?.map(f => f.name).join('<br>')
  map.appendChild(el)
})