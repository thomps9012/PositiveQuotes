import React from 'react';
import logo from './vibes.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Quote from './quotes/quote';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Put some random positiveness in your day
        </p>
        <Link to="/quote" component={Quote}>
        <Button size="lg" variant="primary">Yes Please</Button>
        </Link>
      </header>
    </div>
    </Router>
  );
}

export default App;
