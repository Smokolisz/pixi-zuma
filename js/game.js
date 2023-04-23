import app from "./app/app.js";
import Circle from "./circle/Circle.js";
import Colors from './colors/Colors.js';
import Path from "./path/Path.js";

// PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(MotionPathPlugin, PixiPlugin);



let bunny = new PIXI.Sprite.fromImage('https://pixijs.io/examples-v4/examples/assets/bunny.png')
app.stage.addChild(bunny)
bunny.anchor.set(0.5)

var path1 = [100, 200, 200, 200, 240, 100];

let path2 = [{
  x: 0,
  y: 0
}];

for (let i = 0;i < path1.length; i=i+2) {
  path2.push({x: path1[i], y: path1[i+1]})
}
let graphics = new PIXI.Graphics()
graphics.lineStyle(10, 0x3500FA, 1);
graphics.bezierCurveTo(100, 200, 200, 200, 240, 100)
// graphics.endFill();
app.stage.addChild(graphics);


gsap.to(bunny, {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "none",
  motionPath:{
    path: path2,
    type: 'cubic',
    autoRotate: true,
    useRadians: true
  }
});







let path = new Path();

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;

  path.moveCircles(delta);
});

function createRandomCircleOnPath() {
  let circle = new Circle();

  path.addCircleToPath(circle);
}

for(let i=0;i<100;i++) {
  createRandomCircleOnPath();
}