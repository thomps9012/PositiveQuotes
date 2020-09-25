import axios from 'axios';
import React from 'react';
import './quote.css';
export default Quote;


export default class Quote extends React.Component {
    state = {
        quote: []
    }

    componentDidMount() {
        axios.get(`https://quotes15.p.rapidapi.com/quotes/random/`)
            .then(res => {
                const quote = res.data;
                this.setState({ quote });
            })
    }
    render() {
        return(
            <ul>
            { this.state.quote.map(quote => <li>{quote.content}</li>) }
            { this.state.quote.map(quote => <li>{quote.orginator.name}</li>) }
            </ul>
        )
    }
}