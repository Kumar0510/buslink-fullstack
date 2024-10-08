import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import './Rootlayout.css'

function RootLayout() {
  return (
    <div>
        <Header></Header>
        <div style={{minHeight:"100vh"}}>
          <Outlet></Outlet>
        </div>
        <footer>
          <div className='left'>contact
            <p>7013424402</p>
          </div>
          <div className='right'>@copyright 2024</div>
        </footer>
    </div>
  )
}

export default RootLayout