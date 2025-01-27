import { useState } from "react"
import { MeshBasicMaterial } from "three"
import SquareClick from "../logic/SquareClick"

const Square = ({position,scale=[1.5,0.5,1.5],color="blue", id})=>{
    //
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    //
    const delegateClick = ()=>{ SquareClick(id)}
    // 
    return(
        <mesh 
            position={position} 
            onPointerEnter={(event)=>(event.stopPropagation(),setIsHovered(true))} 
            onPointerLeave={(event)=>(event.stopPropagation(),setIsHovered(false))} 
            onClick={() => delegateClick()}>

                <boxGeometry args={scale}/>
                <meshStandardMaterial color={color} opacity={isHovered ? 0.3 : 0} transparent/>
        </mesh>
    )
}

export default Square;