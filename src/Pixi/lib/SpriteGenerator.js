import {Sprite} from "pixi.js";

export default (pixiApp, image, scaleX, scaleY, posX, posY)=>{

    const texture = pixiApp.loader.resources[image].texture;

    let sprite = new Sprite(texture);

    sprite.width = scaleX;

    sprite.height = scaleY;

    if(posX) sprite.x = posX;
    if(posY) sprite.y = posY;

    return sprite;
}

