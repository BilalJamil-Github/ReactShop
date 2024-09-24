import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Applayout() {
  return (
    <>
      <Navbar/>
      <div style={{marginTop:'120px'}}>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Applayout
