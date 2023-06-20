import React from 'react';
import './JsonFile.css';

function GetJson() {
    async function GetData() {
        
        const a = await fetch('https://type.fit/api/quotes')
        const b = await a.json();
        var randomQuote = Math.floor(Math.random() * (b.length));
        document.getElementById('myquote').innerHTML = b[randomQuote].text;
        document.getElementById('myauthor').innerHTML = b[randomQuote].author;
        document.getElementById('quote').innerHTML = b[randomQuote].text;
        document.getElementById('author').innerHTML = b[randomQuote].author;
    }
    return (
        <div>
            <div className="desktop">
                <center>
                    <p id="myquote">  </p>
                    <p id="myauthor"> </p>
                    <button type="button" onClick={GetData}>Quote of the day</button>
                </center>
            </div>    
            <div id="phone">
                <center>
                    <h1 id="quote">  </h1>
                    <p id="author"> </p>
                    <button type="button" onClick={GetData}>Quote of the Day</button>
                </center>
            </div>
        </div>
    )
}

export default GetJson;