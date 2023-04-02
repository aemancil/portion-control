import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Get Started button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Portion Control</h1>
        <Link to="/new-screen" className="get-started-button">
          Get Started
        </Link>
      </header>
    </div>
  );
}

export default App;