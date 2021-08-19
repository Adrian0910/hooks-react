
import React, { useReducer } from 'react'
import {todoReducer} from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
}];



export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);
    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Mundo</li>
                <li>Hola</li>
                <li>Hola Mundo</li>
            </ul>
        </div>
    )
}


