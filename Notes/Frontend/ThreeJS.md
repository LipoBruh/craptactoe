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

Elements can be grouped like so :

```js
import {Canvas} from "@react-three/fiber"
//
const App = () =>{
    return(
        <Canvas>
            <directionalLight position={[3,3,3]}/>
            <group position ={[0,1,1]}> 
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
            </group>
        </Canvas>
    )
}
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

Imperative way of declaring lights:
```js
<primitive object={new THREE.DirectionalLight("white", 1)} position={[0, 10, 5]} />
```

The primitive component also allows the instantiation of other elements like :
- Geometries ( `<primitive object={new THREE.TorusGeometry(1, 0.4, 16, 100)} />` )
- Materials ( `<primitive object={new THREE.MeshLambertMaterial({ color: "purple" })} />` )
- Controls
- Loaders (like a gltf loader)
- Groups of objects
- Lights
- Cameras
- Armatures / bones
- Three.js helpers
- Textures
- Sprites
- Custom Shaders

## Hooks


### useFrame Hook

```js
import {useFrame} from '@react-three/fiber'

function fx(){
    useFrame( (state,delta,xrFrame)=>{/*...*/})
}
```

The state contains the scene details :
- active camera
- root scene object
- webGL renderer
- clock of elapsed time
- size of the canvas
- viewport
- events
- frameloop
- mouse (normalized c`[x,y]` position)
- pointer

The delta is the time (seconds) since the last frame

xrFrame is a parameter related to WebXR for virtual reality.

### useLoader hook
### useThree hook
### useResource hook
### useGraph hook
### useAspect hook
### useCursor hook
### useHelper hook
### useContextBridge hook
### useEvents hook
### useFBO
### useSpring


### props and useState

We can make hover-like changes to our hovered mesh with the onPointerEnter and onPointerLeave props combined with the useState hook.

We can also use the onClick prop to achieve effects upon mouse click events.


```js
const Cube = ({position,scale,color})=>{
    //
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    // 
    return(
        <mesh 
            position={position} 
            onPointerEnter={(event)=>(event.stopPropagation(),setIsHovered(True))} 
            onPointerLeave={(event)=>(event.stopPropagation(),setIsHovered(False))} 
            onClick={() => setIsClicked(!isClicked)}>

                <boxGeometry args={scale}>
                <meshStandardMaterial color={isHovered? color : "grey"}>
        </mesh>
    )
}
```

### drei hooks

The OrbitControls component allow for ways to navigate in the scene.


```js
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
//
const App = () =>{
    return(
        <Canvas>
            <directionalLight position={[3,3,3]}/>
            <group position ={[0,1,1]}> 
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
                <Cube position = {[0,0,0]} scale={[1,1,1]} color={"green"} />
            </group>
            <OrbitControls/>
        </Canvas>
    )
}
```

The UseHelper hook can be used in a new component to help us visualize invisible items like lights.

## Leva helper GUI