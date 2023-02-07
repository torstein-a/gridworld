import {Cell, Grid, isMarine, isTerrestrial} from "./interfaces.js";
import {
  dice,
  diceflip,
  distance,
  draw,
  drawMultiple,
  fillArray,
  index2xy,
  neighbours,
  number2Altitude
} from "./util.js";
import {
  Altitude,
  AltitudeSensitive,
  Biome,
  BiomeFeature,
  LandFeature,
  Latitude,
  LatitudeSensitive,
  Quantitative,
  Topography,
  TopographySensitive
} from "./types.js";
import {Featureless, TerrestrialBiomesFeatures} from "./biomeFeatures.js";
import {FeatureLess, TerrestrialTopographies, MarineTopographies} from "./topography";
import {LandFeatures} from "./landscapeFeatures.js";
import {MarineBiomes, TerrestrialBiomes} from "./biomes.js";
import {createOrGetCanvas, renderHeightmap} from "./canvas.js";


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

function filterByTopology(topology: Topography, topologySensitives: TopographySensitive[]): TopographySensitive[] {
  return topologySensitives.filter(ts => ts.topographies.includes(topology))
}

const world: Grid = {
  size_x: 60,
  size_y: 50,
  maxima: 6,
  minima: 14,
  cells: []
}

//Set latitudes
const neighboursFinder = neighbours(world.size_x, world.size_y)
for (let y = 0; y < world.size_y; y++) {
  for (let x = 0; x < world.size_x; x++) {
    world.cells.push({
      latitude: Math.abs(Math.round(((world.size_y / 2) - y) / (world.size_y / 7))),
      altitude: Altitude.SEALEVEL,
      neighbours: neighboursFinder(x, y),
      decals: []
    })
  }
}

console.log(world.size_x * world.size_y)

// Maxima/minima
const convert = index2xy(world.size_x)
let max = world.maxima, min = world.minima
const globalSloperange = Math.floor(Math.sqrt(world.size_x * world.size_y)) / 4.5
console.log("sloperange", globalSloperange)
const mPoints = drawMultiple([...fillArray(world.size_x * world.size_y, 0).keys()], max + min)
  .map((index) => {
    const alt = max-- > 0
      ? draw([Altitude.MOUNTAINS,Altitude.MOUNTAINS,Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.OLYMPUS])
      : draw([Altitude.PHOTIC, Altitude.MESOPELAGIC, Altitude.MESOPELAGIC, Altitude.ABYSS, Altitude.ABYSS, Altitude.HADAL])
    world.cells[index].altitude = alt
    const localSlopeRange = globalSloperange * (0.9 + Math.random() * 0.4)
    return [index, ...convert(index), (alt / globalSloperange) | 0, alt, localSlopeRange]
  })
console.log(mPoints)
// Altiudes
world.cells.forEach((cell, i) => {
  if (mPoints.every(m => m[0] != i)) {
    const [x, y] = convert(i)
    let alts: number[] = []
    if (cell.altitude != 0) alts.push(cell.altitude, cell.altitude)
    mPoints.forEach(([mi, mx, my, da, alt, localSlopeRange]) => {
      const d = Math.min(
        distance(x, y, mx, my),
        distance(x, y, (mx+world.size_x), my),
        distance(x+world.size_x, y, mx, my)
      )
      if (d <= localSlopeRange) {
        alts.push(da * (localSlopeRange - d))
      }
    })
    cell.altitude = alts.reduce((a, b) => a + b, 0) / alts.length
      || draw([Altitude.SEALEVEL, Altitude.SHALLOWS, Altitude.LOWLANDS])

  }
})

// Spread maxima/minima
mPoints.forEach(([i]) => {
  Object.entries(world.cells[i].neighbours).forEach(([key, index]) => {
    if (index >= 0) {
      const alts: Altitude[] = [world.cells[index].altitude, world.cells[i].altitude]
      Object.entries(world.cells[index].neighbours).forEach(([key, value]) => {
        if (value >= 0 && key.length == 1) {
          alts.push(world.cells[value].altitude)
        }
      })
      world.cells[index].altitude = alts.reduce((a, b) => a + b, 0) / alts.length
        || draw([Altitude.SEALEVEL, Altitude.SHALLOWS, Altitude.LOWLANDS])
    }
  })
})


// Round to the closest Altitude
world.cells.forEach(cell => cell.altitude = number2Altitude(cell.altitude))

//Fill world
// world.cells.forEach(cell => {
//   if (isTerrestrial(cell)) {
//     try {
//       cell.topology = draw<Topology>(filterByAltitude(cell.altitude, TerrestrialTopologies))
//     } catch (e) {
//       cell.topology = FeatureLess
//     }
//
//     cell.landFeatures = drawMultiple<LandFeature>(
//       weightedFeatures(
//         filterByAltitude(cell.altitude, filterByTopology(cell.topology, LandFeatures)),
//         cell.latitude as Latitude)
//       , dice(2))
//
//     let biome = draw<Biome>(
//       weightedFeatures<Biome>(
//         filterByAltitude(cell.altitude, filterByTopology(cell.topology, TerrestrialBiomes)),
//         cell.latitude as Latitude)
//     )
//     cell.biome = biome
//     cell.biomeFeatures = drawMultiple<BiomeFeature>(
//       weightedFeatures(
//         TerrestrialBiomesFeatures.filter((bf: BiomeFeature) => bf.biomes.map(b => b.name).includes(biome.name)),
//         cell.latitude as Latitude)
//       , dice(2))
//   } else {
//     try {
//       cell.topology = draw<Topology>(filterByAltitude(cell.altitude, MarineTopologies))
//     } catch (e) {
//       cell.topology = FeatureLess
//     }
//     cell.landFeatures = drawMultiple<LandFeature>(
//       weightedFeatures(
//         filterByAltitude(cell.altitude, filterByTopology(cell.topology, LandFeatures)),
//         cell.latitude as Latitude)
//       , dice(2))
//     let biome = draw<Biome>(
//       weightedFeatures<Biome>(
//         filterByAltitude(cell.altitude, filterByTopology(cell.topology, MarineBiomes)),
//         cell.latitude as Latitude)
//     )
//     cell.biome = biome
//   }
// })

//Pass over world to add border features
world.cells.forEach((cell, index) => {
  Object.entries(cell.neighbours).forEach(([key,value])=>{
    if (value >= 0) {
      const neighbour = world.cells[value]
      if (isTerrestrial(cell)) {
        if (isMarine(neighbour)) {
          cell.decals.push('beach' + key.toUpperCase())
          cell.isCoastal = true
        }
      }
      else if (isMarine(cell)) {
        if (isTerrestrial(neighbour)) {
          cell.decals.push('surf' + key.toUpperCase())
          cell.isCoastal = true
        }
      }
      else {
        if (isMarine(neighbour)) {
          cell.isCoastal = true
        }
      }
    }
  })
})


console.log(world)

// render
// const map = document.querySelector('#map') as Element
// map.setAttribute('style', `grid: auto-flow / ${fillArray(world.size_x, '1fr').join(' ')}`)
//
// world.cells.forEach(cell => {
//   const el = document.createElement('div')
//   el.classList.add('cell', `a${cell.altitude}`, ...cell.decals)
//   el.innerHTML = (cell.altitude || "") //+ "<br>" + cell.landFeatures?.map(f => f.name).join('<br>')
//   //   + "<br>" + (cell.biome?.name || "") + "<br>" + cell.biomeFeatures?.map(f => f.name).join('<br>')
//   map.appendChild(el)
// })

const map = document.querySelector('#map') as Element
const hiddenMap = document.querySelector('#hidden') as Element
const {canvas: mapCanvas, context: mapContext} = createOrGetCanvas(map)
mapCanvas.width = window.innerWidth
mapCanvas.height = window.innerHeight
const {canvas: hiddenCanvas, context: hiddenContext} = createOrGetCanvas(hiddenMap)
hiddenCanvas.height = world.size_y
hiddenCanvas.width = world.size_x

renderHeightmap(hiddenContext,world)
console.log(mapCanvas.height, mapCanvas.width, window.innerHeight, window.innerWidth)

mapContext.imageSmoothingEnabled = false;
mapContext.drawImage(hiddenCanvas,0,0, mapCanvas.width, mapCanvas.height)