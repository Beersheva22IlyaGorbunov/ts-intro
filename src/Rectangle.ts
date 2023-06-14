import Shape from './Shape'

export default class Rectangle implements Shape {
  constructor (private readonly _width: number, private readonly _height: number) {}

  perimeter (): number {
    return 2 * (this._width + this._height)
  }

  square (): number {
    return this._width * this._height
  }

  get width (): number {
    return this._width
  }

  get height (): number {
    return this._height
  }
}
