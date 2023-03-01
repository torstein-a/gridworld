import {Cell, Grid, isLittoral, isMarine, isTerrestrial} from "./interfaces.js";
import {index2xy} from "./util.js";
import {Altitude, Amount, PopulationFeature} from "./types.js";

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
  [Altitude.OLYMPUS, '#FFF'],
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