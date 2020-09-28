import React from 'react';
import logo from './vibes.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card from 'react-bootstrap/Card';
import axios from '../src/util/api';




class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     quote: '',
     author: ''
   };
 }

 updateQuote = () => {
  const quote = axios;
  console.log(quote);

   this.setState({
    //  quote: results.data.content,
    //  author: results.data.originator.name,
   })
 }

  render(){

    return(

      <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Put some random positiveness in your day
        </p>

        <Button size="lg" variant="primary" onClick={this.updateQuote}>
          Yes Please
          </Button>
          <Card>
            <h1>{this.state.quote}</h1>
            <h2>{this.state.author}</h2>
          </Card>

      </header>
    </div>
    );
  }

}

export default App;
  