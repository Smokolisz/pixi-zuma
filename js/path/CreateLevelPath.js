import app from "../app/app.js";

class CreateLevelPath {
  constructor() {}

  createGraphicPath(path) {
    let pathGraphic = new PIXI.Graphics();
    // pathGraphic.beginFill(0x3500FA, 1);
    pathGraphic.lineStyle(2, 0x000000);
    pathGraphic.position.set(0, 0);
    pathGraphic.moveTo(path[0].x, path[0].y);

    console.log(path);
    for (let i = 0; i < path.length; i++) {
      pathGraphic.lineTo(path[i].x, path[i].y);
    }
    // pathGraphic.lineTo(150, 150);

    pathGraphic.lineStyle(0);
    pathGraphic.endFill();

    // this.moveTo(points[0], points[1]);
    // this.lineTo(points[2], points[3]);

    app.stage.addChild(pathGraphic);

    return;
    for (let i = 0; i < paths.length; i++) {
      let graphics = new PIXI.Graphics();
      graphics.lineStyle(10, 0x555555, 1);
      graphics.bezierCurveTo(...paths[i].curve);
      graphics.endFill();
      graphics.x = paths[i].x;
      graphics.y = paths[i].y;
      app.stage.addChild(graphics);
    }
  }

  assignPathToCircle(circle, path) {
    circle.path = gsap.to(circle.sprite, {
      duration: 15,
      //   repeat: 12,
      repeatDelay: 3,
      yoyo: false,
      ease: "none",
      motionPath: {
        curved: 0,
        curve: 0,
        path: path,
        // type: "cubic",
        autoRotate: true,
        useRadians: true,
      },
      onUpdate: (e) => {},
    });
    console.log(circle.path)
  }
}

export default CreateLevelPath;
