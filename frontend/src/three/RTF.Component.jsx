import React from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import Scene  from "./RTF.SceneLoader"
import NineSquares from './RTF.NineSquares';
import UI from "./RTF.UI"




//main scene component that handles the Three.js layout

export default function RTFComponent() {


    return(
        <>
        <div className="relative h-screen bg-gray-800">
            <UI/>
            <Canvas className="absolute inset-0">
                <Scene/> 
                <NineSquares/>
                <OrbitControls />
            </Canvas>
        </div>
        </>
    )
}