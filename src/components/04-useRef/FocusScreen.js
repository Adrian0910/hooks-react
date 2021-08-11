import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    //useRef referanci mutable 
    const inputRef = useRef();
    // console.log(ref)

    const handleClick = () => {
        inputRef.current.select();
        // console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus</h1>
            <hr/>

            <input
                ref = {inputRef}
                className="form-control mb-2"
                placeholder="Nombre"
            />

            <button 
                className="btn btn-outline-primary"
                onClick= {handleClick}
            >
                Focus
            </button>
        </div>
    )
}
