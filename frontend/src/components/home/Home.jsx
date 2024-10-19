import React from 'react';
import './Home.css'; // Import the updated CSS

function Home() {
  return (
    <div className="home-container">
      {/*
      <div className=" animated-banner">
        <div className="banner-text">
          <h1>Welcome to Online Bus Pass Application</h1>
          <p>Apply or renew your bus pass with ease</p>
        </div>
      </div>
      */}
      <div className="banner">
        {/*<h1>Get Your Bus Pass</h1>
        
        <p>Search for routes or stops...</p>*/}
      </div>
      {/* Bus Pass Application and Routes Section */}
      <div className="features-section">
        <div className="feature-card animated-card">
          <h3>Apply for your bus pass online in just a few steps.</h3>
          
          <ol className='list-group text-start'>
            <li className='list-group-item'>1. Create an account on our website.</li>
            <li className='list-group-item'>2. Log in to your account.</li>
            <li className='list-group-item'>3. Click on the bus pass application link.</li>
            <li className='list-group-item'>4. Fill in the necessary details.</li>
            <li className='list-group-item'>5. Get your bus pass in the "My Pass" section.</li>
          </ol>
        </div>

        <div className="feature-card animated-card">
          <h3>Renew your bus pass online in just a few steps.</h3>
          
          <ol className='list-group text-start'>
            <li className='list-group-item'>1. Log in to your account.</li>
            <li className='list-group-item'>2. Click on renewal.</li>
            <li className='list-group-item'>3. Fill in the details.</li>
            <li className='list-group-item'>4. Your pass is renewed.</li>
            <li className='list-group-item'>5. Get your bus pass in the "My Pass" section.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
