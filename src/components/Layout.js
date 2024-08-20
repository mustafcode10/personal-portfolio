import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({children}) {
  return (
   <div className='layout'>
    <Navbar  />
    <div className='content'>
        {/* content of each page */}
        {children}
    </div>
    <footer>
        <p>Copyright 2024 Web Warrior</p>
    </footer>
   </div>
  )
}

export default Layout