import {describe, expect, test} from '@jest/globals';
import {draw, hex2rgba} from "./util";

describe('draw', ()=>{
  it('should pick a random card', () => {
    expect([1, 2, 3].includes(draw([1, 2, 3]) as number)).toBeTruthy()
  })
  it('should handle a single item array', () => {
    expect(draw(["item"])).toEqual("item")
  })
  it('should handle a zero length array', () => {
    expect(draw([])).toEqual(null)
  })

})

describe('converters', ()=>{
  it('should convert #hex to rgba', ()=>{
    expect(hex2rgba("#F")).toEqual([255,0,0,255])
    expect(hex2rgba("#FF1")).toEqual([255,255,17,255])
    expect(hex2rgba("#090909")).toEqual([9,9,9,255])
  })
})