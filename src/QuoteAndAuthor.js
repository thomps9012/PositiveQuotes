import React from 'react';

class QuoteAndAuthor extends React.Component {
    render(){
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return(
            <div style={{ backgroundColor: randomColor }} className='quotebox'>
                <div className='fadeIn'
                    key={Math.random()}
                    style={{ color: 'white' }}
                    >
                        <img id='image' src={this.props.image} alt=""></img>
                        <br></br>
                        <h1 id='quote'>"{this.props.quote}"</h1>
                        <h5 id='author'>
                            -{this.props.author ? this.props.author : "Unknown"} -
                        </h5>
                    </div>
                    <button
                        style={{ backgroundColor: randomColor }}
                        id="newquote"
                        onClick={this.props.handleClick}
                        >
                            Quote Me! 
                        </button>
                        <br></br>
            </div>
        );
    }
}
export default QuoteAndAuthor;