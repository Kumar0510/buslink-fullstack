import React from 'react'
import './About.css'
function About() {
  return (
    <div className = "root">
    
    <div className='text-center m-10 card mx-auto'>
      <div className="card-body">
        Welcome to BusLink – your one-stop platform for convenient and hassle-free bus pass management. We provide students with seamless options for bus pass registration and easy renewals for 30 or 90 days. Our mission is to make daily commutes simpler, saving you time and ensuring reliable access to transit passes. With BPA, managing your travel is now just a few clicks away. Join us in making your journey smarter, faster, and more accessible!
      </div>
    </div>

    {/*
    <div className="card " >
      <div className="card-body p-5">
    <div className='heading text-center'>
      <img src="/src/assets/logo.png" alt="" />
      <h5 className="card-title">Buspass</h5>
      </div>
                    
      <img src={busPassRegister.passportimage} className='m-6 profile' alt="" />
      <p className="card-title">Name: {busPassRegister.fullname}</p>
      <p className="card-title">Passtype: {busPassRegister.passtype}</p>
      <p className="card-title">Duration: {busPassRegister.duration} days</p>
      <p></p>
    </div>
    </div>
    */}
    </div>
  )
}

export default About
