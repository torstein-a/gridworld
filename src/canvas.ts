import {Cell, Grid} from "./interfaces.js";
import {index2xy} from "./util.js";
import {Altitude} from "./types.js";

export const createOrGetCanvas = (parent: Element) => {

  let canvas = parent.querySelector('canvas')
  if (!canvas) {
    canvas = document.createElement('CANVAS') as HTMLCanvasElement
    parent.appendChild(canvas)
  }
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

export const altitude2color = (altitude: Altitude):string => [
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