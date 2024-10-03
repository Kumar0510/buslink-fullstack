import { useState } from 'react'
import './App.css'
import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {
  let browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children : [
        { 
          path: 'login',
          element:<Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={(browserRouter)}>

    </RouterProvider>
  )
}

export default App