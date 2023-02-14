import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AnimalList from './Components/008/AnimalList';
import Click from './Components/008/Click';

const data = [
    { id: 1, animal: 'Racoon', color: 'crimson', bold: true },
    { id: 4, animal: 'Fox', color: 'brown', bold: true },
    { id: 17, animal: 'Beaver', color: 'skyblue', bold: false },
    { id: 8, animal: 'Unicorn', color: 'coral', bold: true },
];

// padaryti gyvunu sarasa

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Click />
//                 <div className="card">
//                     <h2>Animals List</h2>
//                     <ul className="list-group list-group-flush">
//                         {data.map((e, i) => (
//                             <AnimalList key={i} animal={e} index={i} />
//                         ))}
//                     </ul>
//                 </div>
//             </header>
//         </div>
//     );
// }


// STATE'as - grubiai tariant yra kintamasis. !!Kintamasis, kurio neglime tiesiogiai keisti.!! State daromas paciame komponente!!

function App() {

    // STATE'as yra sudaromas is vieju dalyku:
    // usState() "hook'as" - JavaScript funkcija kuria reikia usinti reikia  norint naudoti.
    // 'start value' - pradine state reiksme, ji privaloma visuomet.

    const [stateValue, functionToChangeState ] = useState('start value');

    // pakeisti stateValue, naudojame funkcija
    functionToChangeState('next value'); // => stateValue === 'next value';

    const arr = ['red', 'blue']; 

    const [red, blue] = arr;

    console.log(typeof red, red);
    console.log(typeof blue, blue);


    return (
        <div className="App">
            <header className="App-header">
                <Click />
                <div className="card">
                    <h2>Animals List</h2>
                    <ul className="list-group list-group-flush">
                        {data.map((e, i) => (
                            <AnimalList key={i} animal={e} index={i} />
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;
