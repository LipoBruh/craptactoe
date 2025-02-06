import React from 'react'
import Button from './RTF.Button'
import { useSelector } from 'react-redux';
import {init_offline_states, init_online_states} from "../logic/InitiateStates"

const UI = ()=>{

    const mode = useSelector(state => state.gameState.online);

    return (
    <>
    {mode?<></>:
        <>  
        <Button position={[40,80]} onClickFX={init_offline_states}>
            Offline
        </Button>
        <Button position={[150,80]} onClickFX={init_online_states}>
            Online
        </Button>
        </>  
    }
    </>
  )
}

export default UI