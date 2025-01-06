import React from 'react';
import ReactDOM from 'react-dom/client';

// function Pet(props) {
//     return <li>{props.showPet}</li>
// }

// function AnimalsList() {
//     return (
//         <>
//             <h1>You have:</h1>
//             <ul>
//                 {petsArr.map((pet) => <Pet showPet={pet}/>)}
//             </ul>
//         </>
//     )
// }

// function AnimalsList() {
//     return (
//         <>
//             <h1>You have:</h1>
//             <ul>
//                 {petsArr.map((pet) => <Pet key={pet.id} showPet={pet.showPet}/>)}
//             </ul>
//         </>
//     )
// }


// const petsArr = [
//     {
//         "id": 1,
//         "showPet": "redCat"
//     },
//     {
//         "id": 3,
//         "showPet": "dog"
//     },

//     {
//         "id": 2,
//         "showPet": "brownCat"
//     },

// ]

// const petsArr = ["redCat", "brownCat", "dog"];
// const pets = ["redCat"];
// const pets = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< AnimalsList />);