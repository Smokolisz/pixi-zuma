import app from "../app/app.js";
import Colors from '../colors/Colors.js';
import getRandomInt from "../helpers/randomInt.js";

class Circle {

    static get getSize() {
        return 30;
    };

    get getX() {
        return this.sprite.x;
    }
    
    get getY() {
        return this.sprite.y;
    }

    constructor(color = null) {
        this.sprite = PIXI.Sprite.from('./img/circle.png');
        this.sprite.x = -100;
        this.sprite.y = -100;

        this.path = null;


        if (color) {
            this.color = color;
        } else {
            this.color = Colors.getRandomColor();
        }

        this.setColor();

        this.sprite.scale.set(this.calculateSize());
        app.stage.addChild(this.sprite);
    }

    calculateSize() {
        let px = (100 - (100-Circle.getSize))/100;
        return px;
    }

    setColor() {
        this.sprite.tint = this.color.getHex();
    }

    move(x, y) {
        this.sprite.x += x;
        this.sprite.y += y;
    }
}

export default Circle;