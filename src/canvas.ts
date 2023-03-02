import {Cell, Grid, isLittoral, isMarine, isTerrestrial} from "./interfaces.js";
import {hex2rgba, index2xy} from "./util.js";
import {Altitude, Amount, PopulationFeature} from "./types.js";
import {Sphere, Texture} from "./sphere.js";

export const createCanvas = (parent: Element) => {

  let canvas = document.createElement('CANVAS') as HTMLCanvasElement
  parent.appendChild(canvas)

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  ctx.imageSmoothingEnabled = false;

  return {
    canvas: canvas,
    context: ctx
  }
}

export const renderHeightmap = (ctx: CanvasRenderingContext2D, world: Grid): void => {
  const i2xy = index2xy(world.size_x)
  world.cells.forEach((cell, i) => {
    const [x, y] = i2xy(i)
    ctx.fillStyle = altitude2color(cell.altitude)
    ctx.fillRect(x, y, 1, 1)
  })
}

export const renderDemographicsMap = (ctx: CanvasRenderingContext2D, world: Grid): void => {
  const i2xy = index2xy(world.size_x)
  world.cells.forEach((cell, i) => {
    const [x, y] = i2xy(i)
    if (isMarine(cell)) {
      ctx.fillStyle = '#82bdfc'
    } else ctx.fillStyle = pop2color(cell.populationFeature)

    ctx.fillRect(x, y, 1, 1)
  })
}

export const renderSphere = (ctx: CanvasRenderingContext2D, world: Grid): void => {
  const texture = new Texture(world.size_x, world.size_y, world.cells.map(cell => {
    return hex2rgba(altitude2color(cell.altitude))
  }))

  const sphere = new Sphere(texture)




  const W = world.size_x, H = world.size_y, w = W / 2, h = H / 2
  let time = 0
  setInterval(function () {
      time += 0.1
      const idata = ctx.getImageData(0, 0, W, H)

      let i = 0, pixel = [0, 0, 0, 0];
      for (var x = 0; x < W; ++x) {
        for (var y = 0; y < H; ++y) {
          pixel = sphere.getPixelAt((x - w) / w, (y - h) / h, time) || [255,0,255,255]

          idata.data[i++] = (pixel[0]);
          idata.data[i++] = (pixel[1]);
          idata.data[i++] = (pixel[2]);
          idata.data[i++] = (pixel[3]);


        }
      }
      ctx.putImageData(idata, 0,0);
    },
    100);
}

export const altitude2color = (altitude: Altitude): string => [
  [Altitude.HADAL, '#003'],
  [Altitude.ABYSS, '#006'],
  [Altitude.MESOPELAGIC, '#009'],
  [Altitude.PHOTIC, '#0d4e9b'],
  [Altitude.SHALLOWS, '#477cff'],
  [Altitude.SEALEVEL, '#d0b9a1'],
  [Altitude.LOWLANDS, '#86ad87'],
  [Altitude.FOOTHILLS, '#417c27'],
  [Altitude.HIGHLANDS, '#6e6c4c'],
  [Altitude.MOUNTAINS, '#858588'],
  [Altitude.HIMALAYAS, '#adadad'],
  [Altitude.OLYMPUS, '#FFFFFF'],
].find(kvp => kvp[0] == altitude)?.[1] as string || '#e600ff'

export const pop2color = (pop: PopulationFeature | undefined) => {
  if (pop) {
    return [
      [Amount.NONE, '#FFF'],
      [Amount.DOZEN, '#f6f6ab'],
      [Amount.SCORE, '#c9e1a0'],
      [Amount.KOPA, '#a1cc98'],
      [Amount.HUNDRED, '#7cb590'],
      [Amount.GROSS, '#5d9d88'],
      [Amount.HALFMILLE, '#43867d'],
      [Amount.MILLE, '#2f6e70'],
      [Amount.GREAT_GROSS, '#605d21'],
      [Amount.MYRIAD, '#80522e'],
      [Amount.LAKH, '#dd9246'],
      [Amount.CRORE, '#c04e24'],
    ].find(kvp => kvp[0] == pop.populationRange[1])?.[1] as string || '#e600ff'
  }

  return '#FFF'
}