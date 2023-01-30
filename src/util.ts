export const coinflip = () => Math.random() > 0.5
export const dice = (sides: number) => Math.random() * sides < 1

export function draw<T>(array: T[]):T|undefined {
  if (array.length) return array[Math.ceil(Math.random() * (array.length - 1))]
  return undefined
}
