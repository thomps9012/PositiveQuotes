import React from 'react';
import './quote.css';

function Quote() {
    const axios = require('axios');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()    
    useEffect(() => {
        fetch("https://api.example.com/items")
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
            .then((response) => {
                console.log(response)
                setIsLoaded(true);
                setContent(response.content);
            })
            .catch((error) => {
                console.log(error)
            })
        // .then(res => res.json())
        // .then(
        //   (result) => {
        //     setIsLoaded(true);
        //     setItems(result.items);
        //   },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        //   (error) => {
        //     setIsLoaded(true);
        //     setError(error);
        //   }
        //     )
        // }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>
                        {content}
                    </h1>
                </div>
              
            );
        }
    })
}

export default Quote;