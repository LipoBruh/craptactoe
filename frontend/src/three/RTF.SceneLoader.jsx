import React from "react";
import {useGLTF } from "@react-three/drei";


//will load the scene.gltf in the scene. 
//The scene is already scaled properly so no additionnal manipulations are required.
export default function Scene() {

    const { scene, nodes, materials } = useGLTF("/public/scene.gltf");
  
    return <primitive object={scene} />;
  }
  