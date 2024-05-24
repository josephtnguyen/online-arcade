import './App.css';
import React from 'react'

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/test');
      const message = await response.json();
      console.log(message)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        HELLO WORLD!!
        <button onClick={handleClick}>Hello</button>
      </header>
    </div>
  );
}

export default App;