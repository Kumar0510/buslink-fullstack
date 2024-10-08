import React from 'react';
import './Home.css'; // Import a CSS file for styling if needed

function Home() {
  return (
    <div className="home-container">
        
      <div className="banner">
        {/*<h1>Get Your Bus Pass</h1>
        
        <p>Search for routes or stops...</p>*/}
      </div>

      {/* Bus Pass Application and Routes Section */}
      <div className="features-section">
        <div className="feature-card1">
          <h3>Apply for your bus pass online in just a few steps.</h3>
          <ol className='list-group text-start'>
            <li className='list-group-item'>1. Create an account in our website </li>
            <li className='list-group-item'>2. login to your acount </li>
            <li className='list-group-item'>3. click on bus pass application link </li>
            <li className='list-group-item'>4. Fill the neccessary details</li>
            <li className='list-group-item'>5. Get your bus pass in my pass section</li>
          </ol>
        </div>

        <div className="feature-card1">
          <h3>Renewal your bus pass online in just a few steps.</h3>
          <ol className='list-group text-start'>
            <li className='list-group-item'>1. login to your acount</li>
            <li className='list-group-item'>2. click on renewal </li>
            <li className='list-group-item'>3. fill the details </li>
            <li className='list-group-item'>4. pass is renewed</li>
            <li className='list-group-item'>5. Get your bus pass in my pass section</li>
          </ol>
        </div>
          {/*
        <div className="feature-card2">
          <h3>Bus Routes</h3>
          <p>Explore all bus routes and find the best path for your journey.</p>
          <button className="btn">View Routes</button>
        </div>
        */}
      </div>

      {/* Check Bus Timings Section 
      <div className="timings-section">
        <h2>Check Bus Timings</h2>
        <input type="text" placeholder="Enter route number or stop name..." />
        <button className="btn">View Timetable</button>



      </div>
      */}
    </div>
  );
}

export default Home;
