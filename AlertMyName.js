import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';


// main component HandleForm return a form which contains:
// input where you enter your name
// submit-button which activates another component ShowName

function HandleForm() {

    function ShowName(event) {
        event.preventDefault(); // prevent alert() without name
        alert(`Hello, ${name}`); // shows the name you submitted
    }
    const [name, setName] = useState("");

    return (
        <>
            <form onSubmit={ShowName}>
                <input
                    type="text"
                    placeholder="Please enter your name"
                    onChange={(event) => setName(event.target.value)} />
                <input type="submit" />
            </form>
            <h1>Your name is {name}</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< HandleForm />);