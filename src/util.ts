// true/false 50/50
export const coinflip = (): boolean => !Math.round(Math.random())
// true 1/n times
export const diceflip = (d: number): boolean => Math.random() * d < 1
// dice roll, number from 1 to n
export const dice = (d: number): number => Math.ceil(Math.random() * d)

// pick one item from an array
export function draw<T>(array: T[]): T {
  if (array.length) return array[dice(array.length) - 1]
  else throw new Error("index out of bounds")
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
export function fillArray<T> (n: number, val: T): T[] {
  return [...(new Array(n))].map(_ => typeof val === 'function' ? val() : val)
}
