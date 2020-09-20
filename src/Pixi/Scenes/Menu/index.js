import SpriteGenerator from '../../lib/SpriteGenerator';
import {background} from "../../../Images";
import {CANVAS_WIDTH, CANVAS_HEIGHT} from "../../../Constants";

export default function(pixiApp){

    const backgroundSprite = SpriteGenerator(pixiApp, background, CANVAS_WIDTH, CANVAS_HEIGHT);

    return backgroundSprite;
}