import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import UserLoginContext from '../../../contexts/UserLoginContext'

function UserProfile() {
  return (
    <div>
        <ul className='nav justify-content-center fs-4'>
          <li className='nav-item'>
            <Link to='renewal' className='nav-link text-info'>
              Renewal 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='newapply' className='nav-link text-info'>
              New Application 
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}

export default UserProfile