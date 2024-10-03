import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

function RootLayout() {
  return (
    <div>
        <Header></Header>
        <div style={{minHeight:"100vh"}}>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RootLayout