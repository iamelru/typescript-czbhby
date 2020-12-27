import { player } from "../Path2D";
import Layer from "./Layer.class";

export class PlayerLayer extends Layer {
  private _c: CanvasRenderingContext2D;
  _html = new DocumentFragment();
  get html() {
    return this._html;
  }

  constructor() {
    super();
    this._c = document.createElement("canvas").getContext("2d");
    this._html.append(this._c.canvas);
  }

  update() {}

  render() {
    this._c.fill(player);
  }
}

const playerLayer = new PlayerLayer();

export default playerLayer;
