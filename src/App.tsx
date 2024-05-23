import './App.css';
import React from 'react'

function App() {
  const handleClick = async () => {
    // console.log('Calling Server')
    try {
      const response = await fetch('http://localhost:3001/');
      const message = response.json();
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
