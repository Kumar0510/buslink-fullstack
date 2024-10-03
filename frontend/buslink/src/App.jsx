import { useState } from 'react'
import './App.css'
import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {
  let browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children : [
        { 
          path: '',
          element:<Home />
        }
        ,{ 
          path: 'login',
          element:<Login />
        },
        {
          path: 'register',
          element: <Register />
        },{ 
          path: 'aboutus',
          element:<About />
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