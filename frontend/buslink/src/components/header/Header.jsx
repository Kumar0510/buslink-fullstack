import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css'
function Header() {
    let userLoginStatus = false;
  return  (
    <div>
      <div className='d-flex flex-wrap justify-content-around p-1 main'>
        <div className="productHeader">
          <img src="/src/assets/logo.png" alt="" className = "logoheader"/>
          <h3 className='companyname text-white'>BusLink</h3>
        </div>
        <ul className='nav justify-content-end fs-4 navMain'>
          <li className='nav-item'>
            <Link to='' className='nav-link text-white'>
              Home 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='register' className='nav-link text-white'>
              register 
            </Link>
          </li>
          {userLoginStatus === false ? (
            <li className="nav-item">
              <Link to="login" className="nav-link text-white" >
                Login
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="login" className="nav-link text-white">
                Logout
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <Link to='aboutus' className='nav-link text-white'>
              about us 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header