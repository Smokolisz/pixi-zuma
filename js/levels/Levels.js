import level1 from "./level1.js";

class Levels
{
    get getLevels() {
        return [
            level1
        ];
    }

    getLevel(id)
    {
        return this.getLevels[id];
    }
}

export default Levels;