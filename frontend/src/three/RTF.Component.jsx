import React from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene  from "./RTF.SceneLoader"
import NineSquares from './RTF.NineSquares';
import UI from "./RTF.UI"
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import {useFrame} from '@react-three/fiber'
import { useState } from "react";
//main scene component that handles the Three.js layout

export default function RTFComponent() {

    const mode = useSelector(state => state.gameState.online);

    return(
        <>
        <div className="relative h-screen bg-gray-800">
            <UI/>
            <Canvas className="absolute inset-0">
                <Scene/> 
                {mode?<NineSquares/>:<></>}
                {mode?<OrbitControls/>:<ChangeCameraPosition />}
            </Canvas>
        </div>
        </>
    )
}

function ChangeCameraPosition() {
    //
    const [time, setTime] = useState(0);
    const { camera } = useThree();
    //
    //useFrame to execute at every frame
    useFrame(({ clock }) => {
        //
        setTime(clock.getElapsedTime()); //store with useState
        camera.position.set(20*Math.cos(0.15 *time), 15, 20*Math.sin(0.15*time));
        camera.lookAt(0, 0, 0);
    });


    return null; 
  }