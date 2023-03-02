// Inspired by https://codepen.io/jaburns/pen/nPqjjy

class Vector {

  private _x: number
  private _y: number
  private _z: number

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this._x = x
    this._y = y
    this._z = z
  }

  get z(): number {
    return this._z;
  }

  get y(): number {
    return this._y;
  }

  get x(): number {
    return this._x;
  }

  setXYZ(x: number = 0, y: number = 0, z: number = 0) {
    this._x = x
    this._y = y
    this._z = z
    return this
  }

  rotX(phi: number) {
    const newY = this._y * Math.cos(phi) - this._z * Math.sin(phi)
    this._z = this._y * Math.sin(phi) + this._z * Math.cos(phi)
    this._y = newY
    return this
  }

  rotY(theta: number) {
    var newX = this._x * Math.cos(theta) + this._z * Math.sin(theta)
    this._z = -this._x * Math.sin(theta) + this._z * Math.cos(theta)
    this._x = newX
    return this
  }

  rotZ(psi: number) {
    var newX = this._x * Math.cos(psi) - this._y * Math.sin(psi)
    this._y = this._x * Math.sin(psi) + this._y * Math.cos(psi)
    this._x = newX
    return this
  }

}

export type Pixel = [number, number, number, number]

export class Texture {
  readonly width: number
  readonly height: number
  readonly pixels: Pixel[]

  constructor(width: number, height: number, pixels: Pixel[]) {
    this.width = width
    this.height = height
    this.pixels = pixels
  }

  getPixelAt(x: number, y: number) {
    return this.pixels[y * this.width + x]
  }
}

export class Sphere {
  private texture: Texture
  private vector: Vector

  constructor(texture: Texture) {
    this.texture = texture
    this.vector = new Vector()
  }

  // get the pixel representation on the sphere for the given x,y coords for delta time elapsed
  getPixelAt(x: number, y: number, delta: number): Pixel {
    const xx = x * x, yy = y * y

    // pixel is outside, return transparent value
    if (xx + yy > 1) return [0, 0, 0, 0]

    // set vector to which x,y,z point on the visible half of the sphere matches the 2d x,y coords
    // and rotate by delta time
    this.vector.setXYZ(x, y, Math.sqrt(1 - xx - yy))
      .rotX(delta)
      .rotY(-1.4)

    // Get spherical coordinate angles from the rotated cartesian values.
    const phi = Math.atan2(this.vector.x, this.vector.y) + Math.PI;     // 0 < phi < 2pi
    const theta = Math.atan2(this.vector.z, 1) + Math.PI / 4; // 0 < theta < pi/2

    // Transform the angles in to texture coordinates
    const u = Math.floor( this.texture.width  *   phi / Math.PI / 2 );
    const v = Math.floor( this.texture.height * theta / Math.PI * 2 );

    return this.texture.getPixelAt(u,v)
  }
}