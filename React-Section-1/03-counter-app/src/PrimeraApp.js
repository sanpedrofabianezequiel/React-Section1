import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo})=>{

    return(
        <>
         <h1>{saludo} </h1>
        </>
    );


}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps = {
    saludo: 'Soy un titulo'
}


export default PrimeraApp;
