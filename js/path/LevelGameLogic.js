import Circle from "../circle/Circle.js";
import Levels from "../levels/Levels.js";
import CreateLevelPath from "./CreateLevelPath.js";

class Path {
    constructor() {
        this.circlesOnPath = [];
        this.levels = new Levels();
        this.currentLevel = this.levels.getLevel(0);

        this.createLevelPath = new CreateLevelPath();
        this.createLevelPath.createGraphicPath(this.currentLevel.path);

        


        console.log(this.currentLevel);
    }

    get getSpeed() {
        return 0.5;
    }

    addCircleToPath(circle) {
        this.circlesOnPath.push(circle);
    }

    moveCircles(delta) {

        let prevCricle = null;

        for(let i=0;i<this.circlesOnPath.length;i++) {

            
            let currentCircle = this.circlesOnPath[i];
            
            if(i == 0) {
                if(!currentCircle.path) {
                    this.createLevelPath.assignPathToCircle(currentCircle, this.currentLevel.path);
                    prevCricle = currentCircle;
                    continue;
                }
            }

            if(!currentCircle.path && Math.abs(currentCircle.getX - prevCricle.getX) > Circle.getSize) {
                this.createLevelPath.assignPathToCircle(currentCircle, this.currentLevel.path);
            } else {
                // currentCircle.path = false;
            }
            

            // if(i == 0) {
            //     currentCircle.move(this.getSpeed * delta, 0 * delta);
            //     prevCricle = currentCircle;
            //     continue;
            // }


            // if(Math.abs(currentCircle.getX - prevCricle.getX) > Circle.getSize) {
            //     currentCircle.move(this.getSpeed * delta, 0 * delta);
            // }

            prevCricle = currentCircle;
        }
    }

}

export default Path;