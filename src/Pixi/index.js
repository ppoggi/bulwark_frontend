import React, {useEffect, useState} from 'react';
import * as PIXI from 'pixi.js';

import {pixiContainerStyles} from "./Styles";
import {beardedMan, paper, hatMan} from "../Images";


const canvasWidth = 512;
const canvasHeight = 512;

const pixiConfig = {
    antialias: true,
    transparent: false,
    resolution: 1,
    height:canvasHeight,
    width:canvasWidth,
};

const pixiApp = new PIXI.Application(pixiConfig);

export default function (props){
    const {setLoading, setLoadingProgress}= props;
    const [initialized, setInitialized] = useState(false);

    /**
     * Initialize Pixi
     */
    useEffect(()=>{
        if(!initialized ){

            const pixiContainer = document.getElementById('pixi-container');
            pixiContainer.appendChild(pixiApp.view);
            setInitialized(true)
        }
    },[]);
    /**
     * Load Images into the texture cache
     */
    useEffect(()=>{

        if(initialized){

            /**
             * Add Assets
             */
            pixiApp.loader.add([beardedMan, paper, hatMan]);
            /**
             * Loading Progress
             */
            pixiApp.loader.onProgress.add((loader, resource)=>{
                //Display the file `url` currently being loaded
                console.log("loading: " + resource.url);

                //Display the percentage of files currently loaded
                console.log("progress: " + loader.progress + "%");
                setLoadingProgress(loader.progress)
                //If you gave your files names as the first argument
                //of the `add` method, you can access them like this
                //console.log("loading: " + resource.name);
            });
            /**
             *Assets have been loaded
             */
            pixiApp.loader.load(()=>{

                setLoading(false);

                const width = canvasWidth;
                const height = canvasHeight;

                const beardedManTexture = pixiApp.loader.resources[beardedMan].texture;
                const paperTexture = pixiApp.loader.resources[paper].texture;
                const hatManTexture = pixiApp.loader.resources[hatMan].texture;

                let beardedManSprite = new PIXI.Sprite(beardedManTexture);
                let paperSprite = new PIXI.Sprite(paperTexture);
                let hatManSprite = new PIXI.Sprite(hatManTexture);

                beardedManSprite.x = width * .8;
                beardedManSprite.y = height * .7;

                beardedManSprite.scale.x = 2;
                beardedManSprite.scale.y = 2;

                hatManSprite.x = width * .1;
                hatManSprite.y = height * .7;

                hatManSprite.width = hatManSprite.width * 2;
                hatManSprite.height = hatManSprite.height * 2;

                paperSprite.width = width;
                paperSprite.height = height;

                pixiApp.stage.addChild(paperSprite);
                pixiApp.stage.addChild(beardedManSprite);
                pixiApp.stage.addChild(hatManSprite);

                pixiApp.ticker.add(delta => gameLoop(delta));

                const gameLoop = (delta)=>{
                };
            })
        }
    }, [initialized]);


    return (
        <div style={pixiContainerStyles}>
            <div id={'pixi-container'}>
            </div>
        </div>
    )
}