import Layer from "../layers/Layer.class";
import { Rendering, Updating } from "../types/generic";

import playerLayer from "../layers/Player.layer";

export class ViewPort implements Updating, Rendering {
  private context: CanvasRenderingContext2D;
  private _html: DocumentFragment;

  private _layers = new Set<Layer>();

  get html() {
    return this._html;
  }

  constructor() {
    this._html = new DocumentFragment();
    this.context = document.createElement("canvas").getContext("2d");
    this.context.canvas.width = innerWidth;
    this.context.canvas.height = innerHeight;
    this._html.append(this.context.canvas);

    this._init();
  }

  _init() {}

  registerLayer(layer: Layer) {
    if (layer instanceof Layer) this._layers.add(layer);
  }

  calculate() {
    this._layers.forEach(layer => {
      layer.calculate;
    });
  }

  render() {
    this._layers.forEach(layer => {
      layer.render();
      this.context.drawImage(layer.context, 0, 0);
    });
  }
}

const vp = new ViewPort();

vp.registerLayer(playerLayer);
