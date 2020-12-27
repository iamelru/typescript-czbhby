import { Rendering, Updating } from "../types/generic";

export default class Layer implements Updating, Rendering {
  html = new DocumentFragment();
  private _context: CanvasRenderingContext2D;
  private _id: string;

  get context() {
    return this._context;
  }

  get id() {
    return this._id;
  }

  update() {}

  render() {}
}
