import app from "./app/app.js";
import Circle from "./circle/Circle.js";
import Colors from './colors/Colors.js';
import LevelGameLogic from "./path/LevelGameLogic.js";

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(MotionPathPlugin, PixiPlugin);






// let test = gsap.to(bunny, {
//   duration: 5, 
//   repeat: 12,
//   repeatDelay: 3,
//   yoyo: false,
//   ease: "none",
//   motionPath:{
//     path: path2,
//     type: 'cubic',
//     autoRotate: true,
//     useRadians: true
//   },
//   onUpdate: (e) => {
    
//     setTimeout(() => {

//       // test.kill();
//     }, 1000);
//   }
// });





let levelGameLogic = new LevelGameLogic();







// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;

  levelGameLogic.moveCircles(delta);
});

function createRandomCircleOnPath() {
  let circle = new Circle();

  levelGameLogic.addCircleToPath(circle);
}

for(let i=0;i<100;i++) {
  createRandomCircleOnPath();
}