import React from 'react'
import Button from './RTF.Button'
import { useSelector } from 'react-redux';
import * as types from '../redux/gameState/gameState.actionTypes'

const UI = ()=>{

    const mode = useSelector(state => state.gameState.online);

    return (
    <>
    {mode?<></>:
        <>  
        <Button position={[40,80]} mode={types.MODE1}>
            Offline
        </Button>
        <Button position={[150,80]} mode={types.MODE2}>
            Online
        </Button>
        </>  
    }
    </>
  )
}

export default UI