import {Grid, isLittoral, isMarine, isTerrestrial} from "./interfaces.js";
import {
  dice,
  diceflip,
  distance,
  draw,
  drawMultiple,
  fillArray,
  HtmlStringLn,
  index2xy,
  neighbours,
  number2Altitude,
  xy2index
} from "./util.js";
import {
  Altitude,
  AltitudeSensitive,
  Biome,
  BiomeFeature,
  LandFeature,
  Latitude,
  LatitudeSensitive,
  Quantitative, Resource, Source,
  Topography,
  TopographySensitive
} from "./types.js";
import {Featureless, TerrestrialBiomesFeatures} from "./biomeFeatures.js";
import {FeatureLess, LittoralTopographies, MarineTopographies, TerrestrialTopographies} from "./topography.js";
import {LandFeatures} from "./landscapeFeatures.js";
import {LittoralBiomes, MarineBiomes, TerrestrialBiomes} from "./biomes.js";
import {createOrGetCanvas, renderHeightmap} from "./canvas.js";
import {Sources} from "./sources.js";
import {Resources} from "./resources.js";


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
      ? draw([Altitude.MOUNTAINS, Altitude.MOUNTAINS, Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.HIMALAYAS, Altitude.OLYMPUS])
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
        distance(x, y, (mx + world.size_x), my),
        distance(x + world.size_x, y, mx, my)
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
world.cells.forEach(cell => {
  if (isTerrestrial(cell)) {
    try {
      cell.topography = draw<Topography>(filterByAltitude(cell.altitude, TerrestrialTopographies))
    } catch (e) {
      cell.topography = FeatureLess
    }

    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(
        filterByAltitude(cell.altitude, filterByTopology(cell.topography, LandFeatures)),
        cell.latitude as Latitude)
      , dice(2))

    let biome = draw<Biome>(
      weightedFeatures<Biome>(
        filterByAltitude(cell.altitude, filterByTopology(cell.topography, TerrestrialBiomes)),
        cell.latitude as Latitude)
    )
    cell.biome = biome
    cell.biomeFeatures = drawMultiple<BiomeFeature>(
      weightedFeatures(
        TerrestrialBiomesFeatures.filter((bf: BiomeFeature) => bf.biomes.map(b => b.name).includes(biome.name)),
        cell.latitude as Latitude),
      dice(2))
    cell.sources = drawMultiple<Source>(
      Sources.filter((s: Source) => s.topographies.map(b => b.name).includes(cell.topography?.name || '')),
      dice(2))
    try {
      cell.resources = cell.sources.map(source => draw<Resource>(
        Resources.filter(r =>
          r.sources.map(s => s.name).includes(source.name)
          && r.biomes.map(b => b.name).includes(biome.name)
        )))
    } catch(e) {
      cell.resources = []
    }


  } else if (isMarine(cell)) {
    try {
      cell.topography = draw<Topography>(filterByAltitude(cell.altitude, MarineTopographies))
    } catch (e) {
      cell.topography = FeatureLess
    }
    cell.landFeatures = drawMultiple<LandFeature>(
      weightedFeatures(
        filterByAltitude(cell.altitude, filterByTopology(cell.topography, LandFeatures)),
        cell.latitude as Latitude)
      , dice(2))
    cell.biome = draw<Biome>(
      weightedFeatures<Biome>(
        filterByAltitude(cell.altitude, filterByTopology(cell.topography, MarineBiomes)),
        cell.latitude as Latitude)
    )
    cell.sources = drawMultiple<Source>(
      Sources.filter((s: Source) => s.topographies.map(b => b.name).includes(cell.topography?.name || '')),
      dice(2))
    try {
      cell.resources = cell.sources.map(source => draw<Resource>(
        Resources.filter(r =>
          r.sources.map(s => s.name).includes(source.name)
          && r.biomes.map(b => b.name).includes(cell.biome?.name || '')
        )))
    } catch(e) {
      cell.resources = []
    }
  } else {
    try {
      cell.topography = draw<Topography>(filterByAltitude(cell.altitude, LittoralTopographies))
    } catch (e) {
      cell.topography = FeatureLess
    }
    cell.biome = draw<Biome>(
      weightedFeatures<Biome>(
        filterByAltitude(cell.altitude, filterByTopology(cell.topography, LittoralBiomes)),
        cell.latitude as Latitude)
    )
  }
})

//Pass over world to add border features
world.cells.forEach((cell, index) => {
  Object.entries(cell.neighbours).forEach(([key, value]) => {
    if (value >= 0) {
      const neighbour = world.cells[value]
      if (isTerrestrial(cell)) {
        if (isMarine(neighbour)) {
          cell.decals.push('beach' + key.toUpperCase())
          cell.isCoastal = true
        }
      } else if (isMarine(cell)) {
        if (isTerrestrial(neighbour)) {
          cell.decals.push('surf' + key.toUpperCase())
          cell.isCoastal = true
        }
      } else {
        if (isMarine(neighbour)) {
          cell.isCoastal = true
        }
      }
    }
  })
})


const map = document.querySelector('#map') as Element
const cellInfo = document.querySelector('#cellInfo') as Element
const hiddenMap = document.querySelector('#hidden') as Element
const {canvas: mapCanvas, context: mapContext} = createOrGetCanvas(map)
mapCanvas.width = window.innerWidth
mapCanvas.height = window.innerHeight
const {canvas: hiddenCanvas, context: hiddenContext} = createOrGetCanvas(hiddenMap)
hiddenCanvas.height = world.size_y
hiddenCanvas.width = world.size_x

renderHeightmap(hiddenContext, world)
console.log(mapCanvas.height, mapCanvas.width, window.innerHeight, window.innerWidth)

mapContext.imageSmoothingEnabled = false;
mapContext.drawImage(hiddenCanvas, 0, 0, mapCanvas.width, mapCanvas.height)

mapCanvas.addEventListener('click', e => {
  const target = e.target as HTMLCanvasElement
  const x = e.x - target.offsetLeft
  const y = e.y - target.offsetTop
  const cell_x = Math.floor(x * world.size_x / target.width)
  const cell_y = Math.floor(y * world.size_y / target.height)
  const w = target.width / world.size_x
  const h = target.height / world.size_y

  mapContext.drawImage(hiddenCanvas, 0, 0, mapCanvas.width, mapCanvas.height)

  mapContext.strokeStyle = "#F0F"
  mapContext.lineWidth = 2
  mapContext.setLineDash([4, 2]);
  mapContext.strokeRect(x - (x % w), y - (y % h), w, h)

  displayCellInfo(cell_x, cell_y)
})

const displayCellInfo = (x: number, y: number) => {
  const index = xy2index(world.size_x, x, y)
  const cell = world.cells[index]
  const neighbours = Object.entries(neighboursFinder(index) as Record<string, number>)
    .map(([key, vindex]) => vindex >= 0 && world.cells[vindex])

  let landscape = isTerrestrial(cell) || isLittoral(cell) ? "landscape" : "ocean floor"
  let land = isTerrestrial(cell) || isLittoral(cell) ? "piece of land" : "stretch of ocean"

  let htmlString = new HtmlStringLn(`The ${landscape} is mostly ${cell.biome?.name}, dominated by ${cell.topography?.name}.`)
  cell.landFeatures?.filter(lf => lf.name !== 'none').forEach(lf => htmlString.htmlLn(`There is a ${lf.name}.`))
  cell.biomeFeatures?.filter(bf => bf.name !== 'none').forEach(bf => htmlString.htmlLn(`There is a ${bf.name}.`))

  if (cell.sources?.length && cell.resources?.length) {
    cell.sources?.forEach(source => {
      let str = `This ${land} could be well suited for ${source.name}`, product = 0
      cell.resources?.filter(r => r.sources.map(src => src.name).includes(source.name)).forEach(r => {
        str += ` yielding ${r.name}`
        product++
      })
      if (product)htmlString.htmlLn(str + '.')
    })
  } else {
    htmlString.htmlLn(`This ${land} doesn't seem to have any special resources.`)
  }


  cellInfo.innerHTML = `<h1>${x},${y}</h1>` + htmlString


  console.log(cell)
}
