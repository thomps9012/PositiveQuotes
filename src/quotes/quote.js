import axios from 'axios';
import React, { useState, useEffect, setContent, response } from 'react';
import './quote.css';
export default Quote;


function Quote() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()    
    useEffect(() => {
        axios({
            "method": "GET",
            "url": "https://quotes15.p.rapidapi.com/quotes/random/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": "a5431a964dmsh3fe2f2b97c70f4ep1c2083jsnb0757f5b9779",
                "useQueryString": true
            }, "params": {
                "language_code": "en"
            }
        })
            .then(response => response.json())
            .then(
                (response) => {
                    console.log(response)
                    setIsLoaded(true);
                    setContent(response.content);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error)
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>
                    {response.content}
                </h1>
            </div>

        );
    }
}
