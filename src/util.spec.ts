import {describe, expect, test} from '@jest/globals';
import {draw} from "./util";

describe('draw', ()=>{
  it('should pick a random card', () => {
    expect([1, 2, 3].includes(draw([1, 2, 3]) as number)).toBeTruthy()
  })
  it('should handle a single item array', () => {
    expect(draw(["item"])).toEqual("item")
  })
  it('should handle a zero length array', () => {
    expect(draw([])).toEqual(undefined)
  })

})
