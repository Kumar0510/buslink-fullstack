import React from 'react'
import './About.css'
function About() {
  return (
    <div className = "root">
    
    <div className='text-center m-10 card mx-auto'>
      <div className="card-body">
        <p>Website created by</p>
        <p>A. Naga Pavan Kumar</p>
        <p>Lalith</p>
        <p>Abdul Azeez</p>
        <p>Abdul Jabbar</p>
        <p>Contact 7013424402 for any Queries</p>
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