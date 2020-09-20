import React, {useEffect, useState} from 'react';
import * as PIXI from 'pixi.js';
import {pixiContainerStyles} from "./Styles";
import {background} from "../Images";
import {Menu} from './Scenes';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from "../Constants";

const pixiConfig = {
    antialias: true,
    transparent: false,
    resolution: 1,
    height:CANVAS_HEIGHT,
    width:CANVAS_WIDTH,
};

const pixiApp = new PIXI.Application(pixiConfig);

export default function (props){
    const {setLoading, setLoadingProgress}= props;
    const [initialized, setInitialized] = useState(false);
    const [currentScene, setCurrentScene] = useState(null);

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
            pixiApp.loader.add([background]);
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

                const menuScene = Menu(pixiApp);

                pixiApp.stage.addChild(menuScene);

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