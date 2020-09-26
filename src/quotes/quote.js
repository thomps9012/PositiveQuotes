
import PropTypes from 'prop-types';
import React from 'react';
import './quote.css';
import Card from 'react-bootstrap/Card';

class Quote extends React.Component{
   
    render() {
        
        const { quote, name } = this.props;

        const QuoteDetails = (
            <div>
                <h1>{quote}</h1>
                <h2>{name}</h2>
            </div>
        );

        return(
            <Card>
                {QuoteDetails}
            </Card>
        );
    }
}

Quote.propTypes = {
    quote: PropTypes.string,
    name: PropTypes.string
};

export default Quote;