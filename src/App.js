import React from 'react';
import logo from './vibes.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Put some random positiveness in your day
        </p>
        <Button variant="primary">Yes Please</Button>
      </header>
    </div>
  );
}

export default App;
