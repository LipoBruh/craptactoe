

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>

        <div>Layout : mimmics portfolio 123 aa</div>
        <div className="bg-blue-500">
          <p className='mb-1'>target inside this div</p>
          <Outlet/>
        </div>
    </>
    )
}
