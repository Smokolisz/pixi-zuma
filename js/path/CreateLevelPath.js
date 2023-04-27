import app from "../app/app.js";

class CreateLevelPath
{
    constructor() {}

    createGraphicPath(paths)
    {
        for(let i=0;i<paths.length;i++) {

            let graphics = new PIXI.Graphics()
            graphics.lineStyle(10, 0x555555, 1);
            graphics.bezierCurveTo(...paths[i].curve)
            graphics.endFill();
            graphics.x = paths[i].x;
            graphics.y = paths[i].y;
            app.stage.addChild(graphics);
        }
    }
}

export default CreateLevelPath;