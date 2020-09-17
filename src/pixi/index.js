import React, {useEffect, useState} from 'react';
import * as PIXI from 'pixi.js';;

export default function (){

    const [app, setPixiApp] = useState(null)
    const [initialized, setInitialized] = useState(false)

    useEffect(()=>{
        if(!initialized){
            const pixiApp = new PIXI.Application();
            setPixiApp(app)
            const pixiContainer = document.getElementById('pixi-container');
            pixiContainer.appendChild(pixiApp.view);
            setInitialized(true)
        }
    },[]);

    useEffect(()=>{
     if(app){

     }

    }, [app]);

    return (
        <div style={{backgroundColor: 'darkgrey', padding: 20}}>
            <div id={'pixi-container'}>
            </div>
        </div>
    )
}