import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setstate] = useState( { data:null, loading:true, error:null } );

    // Validacion del componente (desmontado)
    useEffect(() => {
        return () => {
            isMounted.current = false; 
        }
    },[]);

    useEffect(() => {

        setstate({ data:null, loading:true, error:null });
        // url
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                //Aqui deberiamos evaluar el error para estar seguros del estado
                setTimeout(() => {
                    if( isMounted.current ) {
                        setstate({
                            loading:false,
                            error:null,
                            data,
                        });
                    }else{
                        console.log('componente desmontado...');
                    }
                }, 800);
            });
        
    },[url]); //Se ejecuta unicamente cuando el url cambia
    return state;
}
