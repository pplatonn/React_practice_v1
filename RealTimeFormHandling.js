import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function HandleForm() {
    const [name, setName] = useState("");
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Please enter your name" 
                    onChange={(event) => setName(event.target.value)}/>
            </form>
            <h1>Your name is {name}</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< HandleForm />);