import { useState } from "react"
import { MeshBasicMaterial } from "three"
import SquareClick from "../logic/SquareClick"

const Square = ({position,scale=[1.5,0.5,1.5],color="blue", id})=>{
    //
    const [isHovered, setIsHovered] = useState(false)
    const [isBlocked, setBlocked] = useState(false)
    //
    const delegateClick = ()=>{ 
                                if(!isBlocked && SquareClick(id)){
                                    console.log("trace")
                                    setBlocked(true)
                                }
                            }
    // 
    return(
        <mesh 
            position={position} 
            onPointerEnter={(event)=>(event.stopPropagation(),setIsHovered(true))} 
            onPointerLeave={(event)=>(event.stopPropagation(),setIsHovered(false))} 
            onClick={() => delegateClick()}>

                <boxGeometry args={scale}/>
                <meshStandardMaterial color={isBlocked?"red":color} opacity={isHovered ? (isBlocked?0:0.3) : 0} transparent/>
        </mesh>
    )
}

export default Square;