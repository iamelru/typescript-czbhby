import vp from "./viewPort";

vp.render();

class TheGame {
  html = new DocumentFragment();
  vieport = vp;

  constructor() {
    this.html.appendChild(vp.html);
  }

  update() {
    vp.update();
  }

  render() {
    vp.render();
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }
}

const theGame = new TheGame();

export default theGame;
