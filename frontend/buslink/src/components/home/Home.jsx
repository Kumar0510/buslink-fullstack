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
          <h3>Bus Pass Application</h3>
          <p>Apply for your bus pass online in just a few steps.</p>
          <button className="btn">Apply Now</button>
        </div>

        <div className="feature-card2">
          <h3>Bus Routes</h3>
          <p>Explore all bus routes and find the best path for your journey.</p>
          <button className="btn">View Routes</button>
        </div>
      </div>

      {/* Check Bus Timings Section */}
      <div className="timings-section">
        <h2>Check Bus Timings</h2>
        <input type="text" placeholder="Enter route number or stop name..." />
        <button className="btn">View Timetable</button>
        <div className="bus-timings">
          <p>Route 101 - Next Bus: 5 mins</p>
          <p>Route 202 - Next Bus: 10 mins</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
