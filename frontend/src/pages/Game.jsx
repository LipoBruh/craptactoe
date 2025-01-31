import React from 'react'
//three
import RTFComponent from "../three/RTF.Component.jsx"
//redux
import { Provider } from "react-redux";
import store from '../redux/root.store.js'


export default function Game() {
  return (
    <Provider store={store}>
      <div className='m-auto bg-cyan-50 text-fuchsia-600 font-extrabold' style={{"height":"300px","width":"300px"}}>
        Game
        <RTFComponent/>
      </div>
    </Provider>
  )
}
