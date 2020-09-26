import React from 'react';
import logo from './vibes.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from './quotes/quote';
import api from './quotes/api';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      name: null
    };
  }
  render(){
    
    const { quote, name } = this.state;

    return(

      <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Put some random positiveness in your day
        </p>

        <Quote quote={quote} name={name} />

        <Button size="lg" variant="primary" onClick={Quote}>
          Yes Please
          </Button>

      </header>
    </div>
    );
  }

  async componentDidMount(){
    
    let quoteData = await api.get('/', {
      params: {
        results: 1,
        inc: 'quote, name'
      }
    });

    quoteData = quoteData.data.results[0];

    const quote = quoteData.content;
    const name = quoteData.orginator.name;

    this.setState({
      ...this.state, ...{
        quote,
        name
      }
    });
  }
}

export default App;
  