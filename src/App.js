import React from 'react';
import './App.css';
import quotes from './QuotesDB';
import QuoteAndAuthor from './QuoteAndAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: quotes[0].image,
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }

  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      image: generateRandomQuote.image,
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };
  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div class="quoteBack">
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
          />
      </div>
    );
  }
}

export default App;
