# THREE.JS
https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene





# REACT-THREE-FIBER
https://r3f.docs.pmnd.rs/getting-started/introduction
https://r3f.docs.pmnd.rs/getting-started/installation#react-native



Dependencies:
`npm install three @types/three @react-three/fiber`

The project can be installed in a vite development environment easily.




## Canvas
Is the React component that represents the Three.js Scene. The most rudimentary layout would look like this:

```js
import {Canvas} from "@react-three/fiber"
//
const App = () =>{
    return(
        <Canvas>
            <directionalLight position={[3,3,3]}/>
            <mesh position={[0,0,0]}>
                <boxGeometery args={[2,2,2]}/>
                <meshNasicMaterial color={"orange"}/>
            </mesh>
        </Canvas>
    )
}
```

## Meshes

From the Three.js docs ( [geometries](https://threejs.org/docs/#api/en/geometries/) ) : 
- BoxGeometry
- CapsuleGeometry
- CircleGeometry
- ConeGeometry
- CylinderGeometry
- DodecahedronGeometry
- EdgesGeometry
- ExtrudeGeometry
- IcosahedronGeometry
- LatheGeometry
- OctahedronGeometry
- PlaneGeometry
- PolyhedronGeometry
- RingGeometry
- ShapeGeometry
- SphereGeometry
- TetrahedronGeometry
- TorusGeometry
- TorusKnotGeometry
- TubeGeometry
- WireframeGeometry

The `<mesh>` tag awaits props : 
- a geometry like `<boxGeometry/>`
 - We can also use prop arguments to help define the geometry.
- a material like `<meshStandardMaterial/>` or `<meshNasicMaterial/>`

We can define a custom mesh like so : 

```js
const Cube = ({position,scale,color})=>{
    //
    return(
        <mesh position={position}>
            <boxGeometry args={scale}>
            <meshStandardMaterial color={color}>
        </mesh>
    )
}
```

We can also define meshes in an inline way with the `<mesh/>` component.

```js
<mesh 
    geometry={new THREE.BoxGeometry(1, 1, 1)} 
    material={new THREE.MeshStandardMaterial({ color: "blue" })}
/>
```

Generic props:
- position
- scale
- rotation
- lookAt

Visibility:
- frustumCulled
- visible
- renderOrder

Shadow props:
- castShadow
- shadow-mapSize
- shadow-camera
- shadow-radius
- shadow-bias
- receiveShadow

React Three Fiber props :
- attach
- onUpdate
- args 
- onPointerOver
- onPointerOut


## Lighting 

From the Three.js docs ( [Lights](https://threejs.org/manual/#en/lights) ) :
- AmbientLight
- HemisphereLight
- DirectionalLight
- PointLight
- SpotLight
- RectAreaLight

```js
import {Canvas} from "@react-three/fiber"
//
const App = () =>{
    return(
        <Canvas>
            <directionalLight position={[3,3,3]}/>
        </Canvas>
    )
}
```

Generic props:
- scale
- rotation
- lookAt
- visible

Common props for lights (three.js props):
- color
- intensity
- position
- target

Shadow props:
- castShadow
- shadow-mapSize
- shadow-camera
- shadow-radius
- shadow-bias

React Three Fiber props :
- attach
- onUpdate
- args 