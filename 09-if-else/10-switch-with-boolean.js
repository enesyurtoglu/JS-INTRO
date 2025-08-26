//const { getRandomNumber } = require("../utils/MathHelper")
import { getRandomNumber } from "../utils/MathHelper.js"

let ran1 = getRandomNumber(-100,100);

switch (true){
    case ran1 > 0:
        console.log( 'POS');
        break;
    case ran1 < 0:
        console.log('NEG');
        break;
    defaul:
        console.log('NEUTRAL');
}








