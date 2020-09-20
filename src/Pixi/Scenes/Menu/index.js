import SpriteGenerator from '../../lib/SpriteGenerator';
import {fort} from "../../../Images";
import {CANVAS_WIDTH, CANVAS_HEIGHT} from "../../../Constants";

//TODO Create a better menu scene
export default function(pixiApp){

    const backgroundSprite = SpriteGenerator(pixiApp, fort, CANVAS_WIDTH, CANVAS_HEIGHT);

    return backgroundSprite;
}