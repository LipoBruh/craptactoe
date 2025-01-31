
import Square from "./RTF.Square"
import SymbolComponent from './RTF.Symbol.jsx'
const NineSquares = () =>{

    const scale = 1.5+0.5;
    const color = "cyan";

    return(
            <group position ={[0,0,0]}> 
                {/* Row1 */}
                <Square position = {[-1*scale,0,-1*scale]}  color={color}   id={[0,0]} />
                <Square position = {[0,0,-1*scale]}         color={color}   id={[0,1]} />
                <Square position = {[1*scale,0,-1*scale]}   color={color}   id={[0,2]}/>
                {/* Row2 */}
                <Square position = {[-1*scale,0,0]}          color={color}   id={[1,0]}/>
                <Square position = {[0,0,0]}                color={color}   id={[1,1]}/>
                <Square position = {[1*scale,0,0]}         color={color}   id={[1,2]}/>
                {/* Row3 */}
                <Square position = {[-1*scale,0,1*scale]}    color={color}   id={[2,0]}/>
                <Square position = {[0,0,1*scale]}          color={color}   id={[2,1]}/>
                <Square position = {[1*scale,0,1*scale]}   color={color}   id={[2,2]}/>
                {/* Row1 */}
                <SymbolComponent position = {[-1*scale,0,-1*scale]}  id={[0,0]} />
                <SymbolComponent position = {[0,0,-1*scale]}         id={[0,1]} />
                <SymbolComponent position = {[1*scale,0,-1*scale]}   id={[0,2]}/>
                {/* Row2 */}
                <SymbolComponent position = {[-1*scale,0,0]}         id={[1,0]}/>
                <SymbolComponent position = {[0,0,0]}                id={[1,1]}/>
                <SymbolComponent position = {[1*scale,0,0]}          id={[1,2]}/>
                {/* Row3 */}
                <SymbolComponent position = {[-1*scale,0,1*scale]}   id={[2,0]}/>
                <SymbolComponent position = {[0,0,1*scale]}          id={[2,1]}/>
                <SymbolComponent position = {[1*scale,0,1*scale]}    id={[2,2]}/>
            </group>
    )
}

export default NineSquares;