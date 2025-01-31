import React from 'react'
import ButtonClick from '../logic/ButtonClick'
import { useSelector } from 'react-redux';
import store from '../redux/root.store';

const Button = ({children,position=[0,0],mode=null} )=>{

    const state = store.getState();
    const [x,y] = position
    const delegateButtonClick = ()=>{
        ButtonClick(mode)
        console.log( state.gameState.online)
    }

    return (
        <button
        className={`absolute z-10 m-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        onClick={delegateButtonClick}
        style={{ bottom: y, left: x }}
        >
            {children}
        </button>
  )
}

export default Button;