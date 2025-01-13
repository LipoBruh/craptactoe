

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Game from './Game'
import Footer from '../components/Footer'

export default function Layout() {
  return (
<>
    <Header/>
    <div className='p-3 h-100 w-100 bg-slate-900'> 
        <Game/>
    </div>
    <Footer/>
</>
    )
}
