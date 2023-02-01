import {Grid, isTerrestrial} from "./interfaces.js";
import {dice, diceflip, distance, draw, drawMultiple, fillArray, index2xy, number2Altitude} from "./util.js";
import {
  Altitude,
  AltitudeSensitive,
  Biome,
  BiomeFeature,
  LandFeature,
  Latitude,
  LatitudeSensitive,
  Quantitative,
  Topology,
  TopologySensitive
} from "./types.js";
import {Featureless, TerrestrialBiomesFeatures} from "./biomeFeatures.js";
import {FeatureLess, MarineTopologies, TerrestrialTopologies} from "./topologies.js";
import {LandFeatures} from "./landscapeFeatures.js";
import {MarineBiomes, TerrestrialBiomes} from "./biomes.js";


function weightedFeatures<T>(features: LatitudeSensitive[], latitude: Latitude): T[] {
  if (features.length == 0) return [Featureless as T]
  const filtered = () => features.filter(feature => {
    switch (latitude) {
      case Latitude.POLAR:
        return diceflip(Quantitative.ALWAYS - (feature.frequency?.polar || 0))
      case Latitude.TEMPERATE:
        return diceflip(Quantitative.ALWAYS - (feature.frequency.temperate || 0))
      case Latitude.TROPIC:
        return diceflip(Quantitative.ALWAYS - (feature.frequency.tropic || 0))
      case Latitude.EQUATOR:
        return diceflip(Quantitative.ALWAYS - (feature.frequency.equator || 0))
    }
  }) as T[]
  let out: T[] = filtered()
  let n = 10

  do {
    out = filtered()
  } while (out.length == 0 && n-- > 0)


  return out.length ? out : [Featureless as T]
}

function filterByAltitude<T>(altitude: Altitude, altitudeSensitives: AltitudeSensitive[]): T[] {
  return altitudeSensitives.filter(as => as.altitudes.includes(altitude)) as T[]
}

function filterByTopology(topology: Topology, topologySensitives: TopologySensitive[]): TopologySensitive[] {
  return topologySensitives.filter(ts => ts.topologies.includes(topology))
}

const world: Grid = {
  size_x: 10,
  size_y: 18,
  maxima: 3,
  minima: 2,
  cells: []
}

//Set latitudes
for (let y = 0; y < world.size_y; y++) {
  for (let x = 0; x < world.size_x; x++) {
    world.cells.push({
      latitude: Math.abs(Math.round(((world.size_y / 2) - y) / (world.size_y / 7))),
      altitude: Altitude.SEALEVEL,
    })
  }
}

console.log(world.size_x * world.size_y)

// Maxima/minima
const convert = index2xy(world.size_x)
let max = world.maxima, min = world.minima
const withinSlopeRange = Math.floor(Math.sqrt(world.size_x * world.size_y)) / 2
console.log("sloperange", withinSlopeRange)
const mPoints = drawMultiple([...fillArray(world.size_x * world.size_y, 0).keys()], max + min)
  .map((index) => {
    const alt = max-- > 0
      ? draw([Altitude.HIGHLANDS, Altitude.MOUNTAINS, Altitude.MOUNTAINS, Altitude.MOUNTAINS, Altitude.MOUNTAINS, Altitude.OLYMPUS])
      : draw([Altitude.MESOPELAGIC, Altitude.MESOPELAGIC, Altitude.MESOPELAGIC, Altitude.ABYSS, Altitude.ABYSS, Altitude.HADAL])
    world.cells[index].altitude = alt
    return [index, ...convert(index), (alt / withinSlopeRange) | 0, alt]
  })

// Sett altitudes
console.log(mPoints)

world.cells.forEach((cell, i) => {
  if (cell.altitude == Altitude.SEALEVEL) {
    const [x, y] = convert(i)
    let alts: number[] = []
    mPoints.forEach(([mi, mx, my, da]) => {
      const d = distance(x, y, mx, my)
      if (d <= withinSlopeRange) {
        alts.push(da * (withinSlopeRange - d))
      }
    })
    cell.altitude = number2Altitude((
      alts.reduce((a, b) => a + b, 0) / alts.length)
      || draw([Altitude.SHALLOWS, Altitude.LOWLANDS]))
  }
})


//Fill world
world.cells.forEach(cell => {
  if (isTerrestrial(cell)) {
    try {
      cell.topology = draw<Topology>(filterByAltitude(cell.altitude, TerrestrialTopologies))
    } catch (e) {
      cell.topology = FeatureLess
    }

    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(
        filterByAltitude(cell.altitude, filterByTopology(cell.topology, LandFeatures)),
        cell.latitude as Latitude)
      , dice(2))

    let biome = draw<Biome>(
      weightedFeatures<Biome>(
        filterByAltitude(cell.altitude, filterByTopology(cell.topology, TerrestrialBiomes)),
        cell.latitude as Latitude)
    )
    cell.biome = biome
    cell.biomeFeatures = drawMultiple<BiomeFeature>(
      weightedFeatures(
        TerrestrialBiomesFeatures.filter((bf: BiomeFeature) => bf.biomes.map(b => b.name).includes(biome.name)),
        cell.latitude as Latitude)
      , dice(2))
  } else {
    try {
      cell.topology = draw<Topology>(filterByAltitude(cell.altitude, MarineTopologies))
    } catch (e) {
      cell.topology = FeatureLess
    }
    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(
        filterByAltitude(cell.altitude, filterByTopology(cell.topology, LandFeatures)),
        cell.latitude as Latitude)
      , dice(2))
    let biome = draw<Biome>(
      weightedFeatures<Biome>(
        filterByAltitude(cell.altitude, filterByTopology(cell.topology, MarineBiomes)),
        cell.latitude as Latitude)
    )
    cell.biome = biome
  }
})


console.log(world)

const map = document.querySelector('#map') as Element
map.setAttribute('style', `grid: auto-flow / ${fillArray(world.size_x, '1fr').join(' ')}`)

world.cells.forEach(cell => {
  const el = document.createElement('div')
  el.classList.add('cell', `a${cell.altitude}`)
  el.innerHTML = (cell.topology?.name || "") + "<br>" + cell.landFeatures?.map(f => f.name).join('<br>')
    + "<br>" + (cell.biome?.name || "") + "<br>" + cell.biomeFeatures?.map(f => f.name).join('<br>')
  map.appendChild(el)
})