
import React, {useState} from 'react';
import './counter.css';

export const CounterApp = () => {

    
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    });

    //Aqui aplicamos desestructuracion para los counters
    const { counter1, counter2 } = state;

    return (
        <>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={() => setCounter({
                    ...state, /* pasamos una copia del state para evitar que el counter2 cambie */
                    counter1: counter1 + 1, 
                })}
            >
                +1
            </button>
        </>
    )
}

