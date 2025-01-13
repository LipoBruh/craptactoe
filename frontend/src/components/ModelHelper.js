import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import modelPath from '../blender/scene.gltf';


const LoadGLTFByPath = (scene) => {
    return new Promise((resolve, reject) => {
      // Create a loader
      const loader = new GLTFLoader();
  
      // Load the GLTF file
      loader.load(modelPath, (gltf) => {

        scene.add(gltf.scene);

        resolve();
      }, undefined, (error) => {
        reject(error);
      });
    });
};

export default LoadGLTFByPath;