import React from 'react';
import Button from 'react-bootstrap/Button';

function Contador () {
    const max = 10;
    const min =1;
    
    

    const [isAdd, setCounter] = React.useState(min);

    const agregar = () => {
         const valorActual = isAdd + 1;
         if (valorActual<=max) {
            setCounter(valorActual);
         }
    };

    const quitar = () => {
        const valorActual = isAdd -1;
        if (valorActual>=1) {
            setCounter(valorActual);
        }
    };

    return (
        <div>
            <h1>Productos agregados: {isAdd}</h1>
            <Button  variant='primary' onClick={agregar}>Agregar</Button> {''}
            <Button  variant='primary' onClick={quitar}>Quitar</Button>
            
        </div>
    )

}

export default Contador;