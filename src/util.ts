// true/false 50/50
import {Altitude} from "./types.js";

export const coinflip = (): boolean => !Math.round(Math.random())
// true 1/n times
export const diceflip = (d: number): boolean => Math.random() * d < 1
// dice roll, number from 1 to n
export const dice = (d: number): number => Math.ceil(Math.random() * d)

// pick one item from an array
export function draw<T>(array: T[]): T {
  if (array.length) return array[dice(array.length) - 1]
  throw new Error("index out of bounds")
}

// pick n items from an array
export function drawMultiple<T>(array: T[], draws: number): T[] {
  if (draws > array.length) return array
  let out: T[] = []
  do {
    let i = dice(array.length - 1)
    out.push(array[i])
    array.splice(i, 1)
  } while (--draws)
  return out
}

// fill array w n values
export function fillArray<T>(n: number, val: T): T[] {
  return [...(new Array(n))].map(_ => typeof val === 'function' ? val() : val)
}
// converts numbers to corresponding Altitude
export function number2Altitude(n: number): Altitude {
  if (n < Altitude.ABYSS) return Altitude.HADAL
  if (n < Altitude.MESOPELAGIC) return Altitude.ABYSS
  if (n < Altitude.PHOTIC) return Altitude.MESOPELAGIC
  if (n < Altitude.SEALEVEL) return Altitude.PHOTIC
  if (n < Altitude.LOWLANDS) return Altitude.SEALEVEL
  if (n < Altitude.FOOTHILLS) return Altitude.LOWLANDS
  if (n < Altitude.HIGHLANDS) return Altitude.FOOTHILLS
  if (n < Altitude.MOUNTAINS) return Altitude.HIGHLANDS
  if (n < Altitude.OLYMPUS) return Altitude.MOUNTAINS
  return Altitude.OLYMPUS
}

// index to coordinates
export function index2xy(width: number): Function {
  return (i: number) => {
    return [i % width, Math.floor(i / width)]
  }
}

// distance between two points
export function distance(x1:number,y1:number,x2:number,y2:number):number {
  return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
}