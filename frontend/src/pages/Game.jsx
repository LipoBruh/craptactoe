import React from 'react'
import * as THREE from 'three';
import ThreeComponent from "../three/ThreeComponent.jsx"

export default function Game() {
  return (
    <div className='m-auto bg-cyan-50 text-fuchsia-600 font-extrabold' style={{"height":"300px","width":"300px"}}>
      Game
      <ThreeComponent/>
    </div>
  )
}
