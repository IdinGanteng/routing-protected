
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'


export const Pagelayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Sidebar />
    </div>
  
  )
}

export default Pagelayout

