import Circle from "../circle/Circle.js";

class Path {
    constructor() {
        this.circlesOnPath = [];
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
                currentCircle.move(this.getSpeed * delta, 0 * delta);
                prevCricle = currentCircle;
                continue;
            }


            if(Math.abs(currentCircle.getX - prevCricle.getX) > Circle.getSize) {
                currentCircle.move(this.getSpeed * delta, 0 * delta);
            }

            prevCricle = currentCircle;
        }
    }

}

export default Path;