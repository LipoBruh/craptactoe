import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const ThreeComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas DOM element
    const canvas = canvasRef.current;

    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();

    
    let camera = new THREE.PerspectiveCamera();


    const renderer = new THREE.WebGLRenderer({ canvas });

    // Set renderer size
    renderer.setSize("300", "300");

  




    const loader = new GLTFLoader();

    loader.load(
     'scene.gltf', 
      (gltf) => {
        const gltfScene = gltf.scene;
        scene.add(gltfScene);


            // Look for cameras in the GLTF file
            let gltfCamera = null;
            gltf.scene.traverse((object) => {
              if (object.isCamera) {
                gltfCamera = object; // Found a camera
              }
            });

            if (gltfCamera) {
              console.log('GLTF camera found:', gltfCamera);
              
              // Replace the default camera with the GLTF camera
              renderer.render(scene, gltfCamera); // Use GLTF camera in rendering

              // Optional: Update aspect ratio if the GLTF camera is a PerspectiveCamera
              if (gltfCamera.isPerspectiveCamera) {
                gltfCamera.aspect = 1;
                gltfCamera.updateProjectionMatrix();
                camera= gltfCamera;
              }
            } else {
              console.warn('No cameras found in the GLTF file. Using default camera.');
            }
          

        
    
        console.log('GLTF scene loaded successfully');
      },
      (xhr) => {
        // Optional: Progress callback
        console.log(`Model ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        // Error callback
        console.error('An error occurred while loading the GLTF scene:', error);
      }
    );
    







    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    
    // Cleanup on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas className="m-auto" ref={canvasRef} />;
};

export default ThreeComponent;


// Retrieve list of all cameras
function retrieveListOfCameras(scene) {
  // Get a list of all cameras in the scene
  scene.traverse(function (object) {
    if (object.isCamera) {
      cameraList.push(object);
    }
  });
}
