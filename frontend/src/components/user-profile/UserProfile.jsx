import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import UserLoginContext from '../../../contexts/UserLoginContext'

function UserProfile() {
  let {user, setUser} = useContext(UserLoginContext);
  return (
    <div>
      <div  className='flex justify-content-end display-6 m-5'>
        <p>
          {user.username}
        </p>
      </div>
        <ul className='nav justify-content-center fs-4'>
          <li className='nav-item'>
            <Link to='renewal' className='nav-link text-info'>
              Renewal 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='newapplication' className='nav-link text-info'>
              New Application 
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}

export default UserProfile