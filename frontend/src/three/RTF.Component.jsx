import React from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import Scene  from "./RTF.SceneLoader"
import NineSquares from './RTF.NineSquares';





//main scene component that handles the Three.js layout

export default function RTFComponent() {
    return(
        <Canvas>
            <Scene/>
            <NineSquares/>
            <OrbitControls />
        </Canvas>
    )
}