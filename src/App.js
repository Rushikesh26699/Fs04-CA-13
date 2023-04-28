import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <div className="maindiv">
            <Navbar />
            <User/>
        </div>
    </div>
  );
}

export default App;