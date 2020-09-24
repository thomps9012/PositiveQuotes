import React from 'react';
import logo from './vibes.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from './quotes/quote';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Put some random positiveness in your day
        </p>

        <Button size="lg" variant="primary" onClick={Quote}>

  
            Yes Please
          </Button>

        </header>
      </div>
  );
}

export default App;
