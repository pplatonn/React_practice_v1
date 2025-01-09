import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function FavoriteColor () {
    const [color, setColor] = useState("black");
    
    return (
        <>
        <h1>My favorite color is {color}</h1>
            <button value="Black" onClick={() => setColor("Black")}>Black</button>
            <button value="Red" onClick={() => setColor("Red")}>Red</button>
            <button value="Blue" onClick={() => setColor("Blue")}>Blue</button>
            <button value="Green" onClick={() => setColor("Green")}>Green</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< FavoriteColor />);