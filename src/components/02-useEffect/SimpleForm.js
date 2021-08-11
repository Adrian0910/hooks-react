import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    /* useEffect permite ejecutar efectos secundarios a raiz de una accion */

    const [formState, setformState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hola');
    }, [] );

    useEffect( () => {
        // console.log('formState cambió');
    }, [formState] );

    useEffect( () => {
        // console.log('formState cambió');
    }, [email] );



    const handleInputChange = ({ target }) => {
        console.log(target)
        setformState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (
        <>
         <h1>useEffect</h1>   
         <hr/>
        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>

        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
            
        </div>

        { (name === '123') && <Message /> }

        </>
    )
}
