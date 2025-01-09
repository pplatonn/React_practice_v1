import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function FavoriteAnimal() {
    let [animal, setAnimal] = useState("cat");
    return (
        <>
        <h1>Choose your favorite animal:</h1>
            <button onClick={() => setAnimal("cat")}>Cat🐈</button>
            <button onClick={() => setAnimal("dog")}>Dog🐩</button>
            <button onClick={() => setAnimal("owl")}>Owl🦉</button>
            <button onClick={() => setAnimal("rat")}>Rat🐀</button>

        <h2>My favorite animal is {animal}</h2>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< FavoriteAnimal />);