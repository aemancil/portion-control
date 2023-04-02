import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Get Started button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Website</h1>
        <button onClick={handleClick}>Get Started</button>
      </header>
    </div>
  );
}

export default App;