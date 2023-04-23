import Red from "./Red.js";
import Green from "./Green.js";
import Blue from "./Blue.js";
import getRandomInt from "../helpers/randomInt.js";

class Colors 
{
    static get getColors() {
        return [
            Red, Green, Blue // define available colors in game
        ];
    }

    static getRandomColor() {
        const colors = this.getColors;
        return new colors[getRandomInt(0, colors.length)];
    }
}

export default Colors;